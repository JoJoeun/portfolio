import type { MouseEvent } from 'react';
import type { ApolloQueryResult } from '@apollo/client';
import type { IQuery, IQueryFetchBoardsArgs } from '../../types/generated/types';

export interface IPagination01Props {
  // 처음 렌더링시 undefined일 수 있기 때문에
  count?: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
}

export interface IPagination01UIProps {
  startPage: number;
  lastPage: number;
  activePage: number;
  onClickPage: (e: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
