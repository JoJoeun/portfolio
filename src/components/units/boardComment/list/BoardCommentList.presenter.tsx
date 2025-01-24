import CommentItem01 from '../../../commons/comments/01/commentItem01';
import type { BoardCommentListUIProps } from './BoardCommentList.types';
import InfiniteScroll from 'react-infinite-scroller';

export default function BoardCommentListUI(props: BoardCommentListUIProps): JSX.Element {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => <CommentItem01 key={el._id} el={el} />) ?? (
        // 댓글 없으면 빈값 - ui렌더링하지 않음
        <></>
      )}
    </InfiniteScroll>
  );
}
