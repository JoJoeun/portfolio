import * as S from './BoardList.styles'
import { getDate } from '../../../commons/libraries/utils' 

export default function BoardListUI(props) {
    return(
        <>
            <S.TableWrapper>
                <S.Table>
                    <thead>
                        <S.BoardTr>
                            <S.BoardTh>번호</S.BoardTh>
                            <S.BoardTh>제목</S.BoardTh>
                            <S.BoardTh>작성자</S.BoardTh>
                            <S.BoardTh>날짜</S.BoardTh>
                        </S.BoardTr>
                    </thead>
                    <tbody>
                        {props.data?.fetchBoards.map((list) => (
                            <S.BoardTr key={list._id}>
                                <S.BoardTd>{String(list._id).slice(-4).toUpperCase()}</S.BoardTd>
                                <S.BoardTd id={list._id} onClick={props.onClickMoveToBoardDetail}>{list.title}</S.BoardTd>
                                <S.BoardTd>{list.writer}</S.BoardTd>
                                <S.BoardTd>{getDate(list.createdAt)}</S.BoardTd>
                            </S.BoardTr>
                        ))}
                    </tbody>
                </S.Table>
            </S.TableWrapper>
            <S.ButtonWrapper onClick={props.onClickMoveToBoardNew}>
                <S.Button>
                    <S.PencilIcon src="../../../../../public/images/ic_create.svg" />
                    게시물 등록하기
                </S.Button>
            </S.ButtonWrapper>
        </>
    )
}