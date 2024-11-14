import { Wrapper } from '../../../../../styles/global.js'
import * as S from './BoardDetail.styles'

export default function BoardDetailUI(props) {
    return(
        <>
            <Wrapper className='flex-left'>
                 <S.WriterWrapper>
                    <S.ProfileWrapper>
                        <S.Profile src="/Avartar.svg" />
                        <S.Info>
                            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                            <S.CreateAt>{props.data?.fetchBoard?.createdAt}</S.CreateAt>
                        </S.Info>
                    </S.ProfileWrapper>
                    <S.AddressWrapper>
                        <S.Youtube></S.Youtube>
                        <S.Address></S.Address>
                    </S.AddressWrapper>
                 </S.WriterWrapper>
                 <S.ContentsWrapper>
                    <S.Title>{props.data?.fetchBoard?.title}</S.Title>
                    <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
                 </S.ContentsWrapper>
            </Wrapper>
            <S.BottomWrapper>
                <S.Button>목록으로</S.Button>
                <S.Button>수정하기</S.Button>
                <S.Button>삭제하기</S.Button>
            </S.BottomWrapper>
        </>
    )
}