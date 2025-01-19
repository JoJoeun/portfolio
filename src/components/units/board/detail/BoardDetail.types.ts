import { IQuery } from '../../../../commons/types/generated/types';

export interface BoardDetailUIProps {
  data?: Pick<IQuery, 'fetchBoard'>;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
}
