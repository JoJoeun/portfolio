import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from '../../../../commons/types/generated/types';
import { Board, BoardWriteProps, ErrorState } from './BoardWrite.types';

import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';

import { Address } from 'react-daum-postcode';

import BoardWriteUI from './BoardWrite.presenter';

export default function BoardWrite(props: BoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [board, setBoard] = useState<Board>({
    writer: '',
    password: '',
    title: '',
    contents: '',
  });
  const [error, setError] = useState<ErrorState>({
    writer: '',
    password: '',
    title: '',
    contents: '',
  });
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');

  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(
    CREATE_BOARD,
  );
  const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(
    UPDATE_BOARD,
  );

  const validators: Record<keyof Board, { message: string }> = {
    // Board타입의 키를 복사하고, 각 키에 { message: string } 할당
    // 중복값 삭제 {isValid : !!value, message : "왈라왈라라"}
    writer: { message: '작성자를 입력해주세요.' },
    password: { message: '비밀번호를 입력해주세요.' },
    title: { message: '제목을 입력해주세요.' },
    contents: { message: '내용을 입력해주세요.' },
  };

  // 유효성 검사해주는 함수
  const validateField = (name: keyof Board, value: string) => {
    // !! : truthy한 값은 true로 falsy한 값은 false로 반환
    // VALUE가  truthy한 경우 유효하다고 판단
    const isValid = !!value;
    return isValid ? '' : validators[name].message;
  };

  const onChangeBoard = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setBoard((prev) => {
      const updatedBoard = { ...board, [name]: value }; // 최신 상태 계산

      // isActive 상태 복사
      setIsActive(() => Object.values(updatedBoard).every((field) => field)); //모든 필드가 채워졌는지 확인

      return updatedBoard; // 상태 업데이트
    });

    setError((prev) => ({
      ...prev, // 이전 값 복사
      [name]: validateField(name as keyof Board, value), // Board에 속하는 key로 타입 단언
    }));
  };

  // 전체 유효성 검사
  const validateForm = () => {
    // 각 필드의 에러 message를 저장
    // ex. newError.writer = "작성자를 입력해주세요."
    const newError: ErrorState = { writer: '', password: '', title: '', contents: '' };
    let isValid = true;

    // Object.entries(변수) : 변수 객체의 key-value 쌍을 배열 형태로 반환.
    // ex. {writer : alice} → [["writer", "alice"]]
    Object.entries(board)
      // 반환된 배열에 대해 각 key(name → writer,password...) 값(value → message...) 반복작업 수행
      .forEach(([name, value]) => {
        // validateField의 name과 value를 받아, 유효성 검사 결과를 할당한다.
        // 유효하면 true 메세지, 유효하지 않으면 false 메세지를 반환.
        // ex. validateField("password", "") → "비밀번호를 입력해주세요." 반환
        const errorMessage = validateField(name as keyof Board, value);
        // 각 필드에 대한 errorMessage를 newError에 저장
        // ex. name이 "password", errorMessage가 "비밀번호를 입력해주세요" 라면
        // → newError.password = "비밀번호를 입력해주세요."
        newError[name as keyof Board] = errorMessage;
        // 만약 errorMessage가 빈 문자열이 아닐 경우 (즉, 유효성 검사가 실패할 경우)
        // → 이 떄, errorMessage는 빈 문자열이 아니기 떄문에 true임
        if (errorMessage)
          // 하나라도 유효하지 않으면! isValid를 false로 유지
          isValid = false;
      });

    setError(newError);

    // 검사를 모두 통과하면 isValid를 true 로 반대의 경우엔 false로 반환
    return isValid;
  };

  const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(e.target.value);
  };

  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>): void => {
    setAddressDetail(e.target.value);
  };

  const onClickAddressSearch = (): void => {
    // 이전 상태값을 반전
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  // 제출 버튼을 누르면 유효성 검사를 실행
  const onClickSubmit = async (): Promise<void> => {
    // 유효성 검사에 실패하면 함수 종료.
    if (!validateForm()) return;

    if (board.writer && board.password && board.title && board.contents) {
      try {
        const createBoardInput: IMutationCreateBoardArgs['createBoardInput'] = {
          writer: board.writer,
          password: board.password,
          title: board.title,
          contents: board.contents,
        };

        if (youtubeUrl) {
          createBoardInput.youtubeUrl = youtubeUrl;
        }

        if (zipcode || address || addressDetail) {
          createBoardInput.boardAddress = {
            zipcode,
            address,
            addressDetail,
          };
        }
        const result = await createBoard({
          variables: {
            createBoardInput,
          },
        });

        if (!result.data?.createBoard) {
          alert('요청에 문제가 있습니다.');
          return;
        }

        void router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    if (!board.title && !board.contents && !youtubeUrl && !address && !addressDetail && !zipcode) {
      alert('수정한 내용이 없습니다.');
      return;
    }

    if (!board.password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (board.title) updateBoardInput.title = board.title;
    if (board.contents) updateBoardInput.contents = board.contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail) updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      if (typeof router.query.boardId !== 'string') {
        alert('시스템에 문제가 있습니다.');
        return;
      }

      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: board.password,
          updateBoardInput,
        },
      });

      if (!result.data?.updateBoard) {
        alert('요청에 문제가 있습니다.');
        return;
      }

      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      onChangeBoard={onChangeBoard}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      error={error}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
    />
  );
}
