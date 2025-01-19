import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface BoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  writer: string;
  password: string;
  contents: string;
  // 상태변경을 위한 함수타입
  setStar: Dispatch<SetStateAction<number>>;
}
