import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import type { MouseEvent } from 'react';

import { FETCH_BOARDS } from './BoardList.queries';
import BoardListUI from './BoardList.presenter';
import { IQuery, IQueryFetchBoardArgs } from '../../../../commons/types/generated/types';

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardArgs>(FETCH_BOARDS);

  const onClickMoveToBoardNew = () => [router.push('/boards/new')];

  const onClickMoveToBoardDetail = (e: MouseEvent<HTMLTableCellElement>) => {
    if (e.target instanceof HTMLTableCellElement) router.push(`/boards/${e.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
