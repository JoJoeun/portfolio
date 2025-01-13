import { getDate } from '../../../../commons/libraries/utils';
import * as S from './BoardCommentList.styles';

import { BoardCommentListUIProps } from './BoardCommentList.types';

export default function BoardCommentListUI (props: BoardCommentListUIProps) {
    return (
        <div>
            {props.data?.fetchBoardComments.map((el) => {
                <S.CommentWrapper>
                    <S.FlexWrapper>
                        <S.MainWrapper>
                            <S.Avatar src="/images/avatar.svg" />
                            <S.CommentBox>
                                <S.Writer>{el.writer}</S.Writer>
                                <S.Comment>{el.contents}</S.Comment>
                            </S.CommentBox>
                        </S.MainWrapper>
                        <S.OptionWrapper>
                            <S.UpdateIcon src="/images/boardComment/update.svg" />
                            <S.DeleteIcon 
                                id={el._id}
                                src="/images/boardComment/delete.svg" 
                                onClick={props.onClickDelete}
                            />
                        </S.OptionWrapper>
                    </S.FlexWrapper>
                    <S.Date>{getDate(el?.createdAt)}</S.Date>
                </S.CommentWrapper>
            })}
        </div>
    )
}