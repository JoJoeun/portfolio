import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import type { MouseEvent } from 'react';

import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries';
import BoardListUI from './BoardList.presenter';
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from '../../../../commons/types/generated/types';

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, 'fetchBoardsCount'>,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardNew = (): void => void router.push('/boards/new');

  const onClickMoveToBoardDetail = (e: MouseEvent<HTMLTableCellElement>) => {
    if (e.target instanceof HTMLTableCellElement) router.push(`/boards/${e.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
