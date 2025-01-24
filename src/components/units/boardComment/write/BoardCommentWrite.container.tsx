import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from './BoardCommentWrite.queries';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';

import type { ChangeEvent } from 'react';
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from '../../../../commons/types/generated/types';
import type { IBoardWriteProps } from './BoardCommentWrite.types';

export default function BoardCommentWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [contents, setContents] = useState('');
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, 'createBoardComment'>,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, 'updateBoardComment'>,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(e.target.value);
  };

  const onClickWrite = async (): Promise<void> => {
    try {
      if (typeof router.query.boardId !== 'string') {
        alert('시스템에 문제가 있습니다.');
        return; //종료
      }
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            // 별점
            rating: star,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      // ~로 부터 만들어진 ~가 가진 기능을 만들어진게 사용할 수 있게 됨
      if (error instanceof Error) alert(error.message);
    }

    // 작성 후 입력필드 초기화
    setWriter('');
    setPassword('');
    setContents('');
  };

  const onClickUpdate = async (): Promise<void> => {
    if (contents == '') {
      alert('내용이 수정되지 않았습니다.');
      return;
    }

    if (password == '') {
      alert('비밀번호가 입력되지 않았습니다');
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      // 댓글 내용이 존재하는 경우에만 업데이트
      if (contents) updateBoardCommentInput.contents = contents;
      // 별점이 0이 아닌경우에만 업데이트
      if (star) updateBoardCommentInput.rating = star;

      if (typeof props.el?._id !== 'string') {
        alert('시스템에 문제가 있습니다.');
        return;
      }

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false); // 수정이 완료되면 isEdit를 false로 바꿔준다.
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      writer={writer}
      password={password}
      contents={contents}
      setStar={setStar}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
