import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { IQuery, IQueryFetchBoardArgs } from '../../../../src/commons/types/generated/types';

import BoardWrite from '../../../../src/components/units/board/write/BoardWrite.container';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data, loading, error } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId as string },
      skip: !router.isReady || typeof router.query.boardId !== 'string',
    },
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error: {error.message}...</div>;
  if (!data) return <div>No Data Found</div>;

  return <BoardWrite isEdit={true} data={data} />;
}
