import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { FETCH_BOARD } from './BoardDetail.queries';
import { IQuery, IQueryFetchBoardArgs } from '../../../../commons/types/generated/types';

import BoardDetailUI from './BoardDetail.presenter';

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== 'string') return <></>;

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const onClickMoveToBoardEdit = (): void => {
    if (typeof router.query.boardId !== 'string') {
      alert('시스템에 문제가 있습니다.');
      return;
    }

    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveToBoardList = (): void => {
    router.push(`/boards`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickMoveToBoardList={onClickMoveToBoardList}
    />
  );
}
