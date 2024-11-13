import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

import { Wrapper } from '../../../styles/global.js'
import {
    WriterWrapper,
    ProfileWrapper,
    Profile,
    Info,
    Writer,
    CreateAt,
    AddressWrapper,
    Youtube,
    Address,
    ContentsWrapper,
    Title,
    Contents,
    BottomWrapper,
    Button

} from '../../../styles/boardsDetail.js'


const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
            createdAt
        }
    }
`

export default function BoardDetailPage() {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.boardId}
    })


    return(
        <>
            <Wrapper className='flex-left'>
                 <WriterWrapper>
                    <ProfileWrapper>
                        <Profile src="/Avartar.svg"></Profile>
                        <Info>
                            <Writer>{data?.fetchBoard?.writer}</Writer>
                            <CreateAt>{data?.fetchBoard?.createdAt}</CreateAt>
                        </Info>
                    </ProfileWrapper>
                    <AddressWrapper>
                        <Youtube></Youtube>
                        <Address></Address>
                    </AddressWrapper>
                 </WriterWrapper>
                 <ContentsWrapper>
                    <Title>{data?.fetchBoard?.title}</Title>
                    <Contents>{data?.fetchBoard?.contents}</Contents>
                 </ContentsWrapper>
            </Wrapper>
            <BottomWrapper>
                <Button>목록으로</Button>
                <Button>수정하기</Button>
                <Button>삭제하기</Button>
            </BottomWrapper>
        </>
    )
}