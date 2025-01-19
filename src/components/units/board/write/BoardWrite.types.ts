import { ChangeEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface BoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
}

export interface BoardWriteUIProps {
  onChangeBoard: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickAddressSearch: () => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isActive: boolean;
  isEdit: boolean;
  isOpen: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
  error: ErrorState;
  zipcode: string;
  address: string;
}

export interface Board {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export interface ErrorState {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
