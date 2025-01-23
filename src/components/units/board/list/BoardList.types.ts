import type { ApolloQueryResult } from '@apollo/client';
import type { MouseEvent } from 'react';
import type { IQuery, IQueryFetchBoardsArgs } from '../../../../commons/types/generated/types';

export interface BoardListUIProps {
  data?: Pick<IQuery, 'fetchBoards'>;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (e: MouseEvent<HTMLTableCellElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
  count: number | undefined;
}
