import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries';
import BoardCommentListUI from './BoardCommentList.presenter';

import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from '../../../../commons/types/generated/types';

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== 'string') return <></>;

  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || !fetchMoreResult.fetchBoardComments) {
          // if (fetchMoreResult?.fetchBoardComments === undefined)
          // return { fetchBoardComments: [...prev.fetchBoardComments] };
          // 변경사항이 없는경우 불필요한 렌더링을 방지
          return prev;
        }

        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        };
      },
    });
  };
  return <BoardCommentListUI data={data} onLoadMore={onLoadMore} />;
}
