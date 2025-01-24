import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { IBoardComment } from '../../../../commons/types/generated/types';

export interface IBoardWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

export interface BoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  writer: string;
  password: string;
  contents: string;
  isEdit?: boolean;
  el?: IBoardComment;
  // 상태변경을 위한 함수타입
  setStar: Dispatch<SetStateAction<number>>;
}
