import * as S from './commentItem01.styles';
import { getDate } from '../../../../commons/libraries/utils';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from '../../../units/boardComment/list/BoardCommentList.queries';

import type {
  IBoardComment,
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from '../../../../commons/types/generated/types';
import { MouseEvent, ChangeEvent } from 'react';
import BoardCommentWrite from '../../../units/boardComment/write/BoardCommentWrite.container';

interface IBoardCommentListUiItemProps {
  el: IBoardComment;
}

export default function CommentItem01(props: IBoardCommentListUiItemProps): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState('');
  const [password, setPassword] = useState('');

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    // const password = prompt('비밀번호를 입력하세요.');
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        // 새로고침 없이 백이 아닌 화면에서도 적용
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickCancel = (e: MouseEvent<HTMLButtonElement>): void => {
    setIsOpenDeleteModal(false);
  };

  const onClickOpenDeleteModal = (e: MouseEvent<HTMLImageElement>): void => {
    setBoardCommentId(e.currentTarget.id);
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onClickUpdate = (e: MouseEvent<HTMLImageElement>): void => {
    setIsEdit(true);
  };

  return (
    <div>
      {isOpenDeleteModal && (
        <S.PasswordModal
          open={isOpenDeleteModal}
          onOk={onClickDelete}
          onCancel={onClickCancel}
          closable={false}
        >
          <div>비밀번호 입력</div>
          <S.passwordInput type='password' onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.CommentWrapper key={props.el._id}>
          <S.FlexWrapper>
            <S.MainWrapper>
              <S.Avatar src='/images/avatar.svg' />
              <S.CommentBox>
                <S.WriterWrapper>
                  <S.Writer>{props.el.writer}</S.Writer>
                  <S.star value={props.el.rating} />
                </S.WriterWrapper>
                <S.Comment>{props.el.contents}</S.Comment>
              </S.CommentBox>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                id={props.el._id}
                src='/images/boardComment/update.svg'
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                id={props.el._id}
                src='/images/boardComment/delete.svg'
                onClick={onClickOpenDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.Date>{getDate(props.el?.createdAt)}</S.Date>
        </S.CommentWrapper>
      ) : (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </div>
  );
}
