import { IQuery } from '../../../../commons/types/generated/types';

export interface BoardCommentListUIProps {
  data?: Pick<IQuery, 'fetchBoardComments'>;
  onLoadMore: () => void;
}
