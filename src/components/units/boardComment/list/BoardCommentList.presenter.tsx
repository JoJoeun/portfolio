import { getDate } from '../../../../commons/libraries/utils';
import * as S from './BoardCommentList.styles';

import { BoardCommentListUIProps } from './BoardCommentList.types';

export default function BoardCommentListUI(props: BoardCommentListUIProps): JSX.Element {
  return (
    <div>
      {props.isOpenDeleteModal && (
        <S.PasswordModal
          open={props.isOpenDeleteModal}
          onOk={props.onClickDelete}
          onCancel={props.onClickCancel}
          closable={false}
        >
          <div>비밀번호 입력</div>
          <S.passwordInput type='password' onChange={props.onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {props.data?.fetchBoardComments.map((el) => (
        <S.CommentWrapper key={el._id}>
          <S.FlexWrapper>
            <S.MainWrapper>
              <S.Avatar src='/images/avatar.svg' />
              <S.CommentBox>
                <S.WriterWrapper>
                  <S.Writer>{el.writer}</S.Writer>
                  <S.star value={el.rating} />
                </S.WriterWrapper>
                <S.Comment>{el.contents}</S.Comment>
              </S.CommentBox>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon src='/images/boardComment/update.svg' />
              <S.DeleteIcon
                id={el._id}
                src='/images/boardComment/delete.svg'
                onClick={props.onClickOpenDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.Date>{getDate(el?.createdAt)}</S.Date>
        </S.CommentWrapper>
      ))}
    </div>
  );
}
