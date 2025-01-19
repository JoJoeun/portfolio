import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';

import type { ChangeEvent, MouseEvent } from 'react';
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from '../../../../commons/types/generated/types';

import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from './BoardCommentList.queries';

import BoardCommentListUI from './BoardCommentList.presenter';

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== 'string') return <></>;

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState('');
  const [password, setPassword] = useState('');

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    {
      variables: { boardId: router.query.boardId },
    },
  );

  const onClickDelete = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    // const password = prompt('비밀번호를 입력하세요.');
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        // 새로고침 없이 백이 아닌 화면에서도 적용
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickCancel = (e: MouseEvent<HTMLButtonElement>): void => {
    setIsOpenDeleteModal(false);
  };

  const onClickOpenDeleteModal = (e: MouseEvent<HTMLImageElement>): void => {
    setBoardCommentId(e.currentTarget.id);
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <BoardCommentListUI
      data={data}
      isOpenDeleteModal={isOpenDeleteModal}
      onClickDelete={onClickDelete}
      onClickCancel={onClickCancel}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
    />
  );
}
