import { ChangeEvent, MouseEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface BoardCommentListUIProps {
  data?: Pick<IQuery, 'fetchBoardComments'>;
  onClickDelete: (e: MouseEvent<HTMLButtonElement>) => void;
  isOpenDeleteModal: boolean;
  onClickOpenDeleteModal: (e: MouseEvent<HTMLImageElement>) => void;
  onChangeDeletePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCancel: (e: MouseEvent<HTMLButtonElement>) => void;
}
