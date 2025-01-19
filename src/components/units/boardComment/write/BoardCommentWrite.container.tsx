import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

import type { ChangeEvent } from 'react';

import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries';
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from '../../../../commons/types/generated/types';

import BoardCommentWriteUI from './BoardCommentWrite.presenter';

export default function BoardCommentWrite() {
  const router = useRouter();

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [contents, setContents] = useState('');
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, 'createBoardComment'>,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(e.target.value);
  };

  const onClickWrite = async () => {
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

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      writer={writer}
      password={password}
      contents={contents}
      setStar={setStar}
    />
  );
}
