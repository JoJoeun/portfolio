import { getDate } from '../../../../commons/libraries/utils';
import { BoardDetailUIProps } from './BoardDetail.types';

import { Wrapper } from '../../../../../styles/global';
import * as S from './BoardDetail.styles';

import { Tooltip } from 'antd';

export default function BoardDetailUI(props: BoardDetailUIProps) {
  return (
    <>
      <Wrapper className='flex-left'>
        <S.WriterWrapper>
          <S.ProfileWrapper>
            <S.Profile src='/Avartar.svg' />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreateAt>{getDate(props.data?.fetchBoard?.createdAt)}</S.CreateAt>
            </S.Info>
          </S.ProfileWrapper>
          <S.AddressWrapper>
            <S.Youtube>
              <S.LinkIcon src='/images/board/ic_link.svg' />
            </S.Youtube>
            <S.Address>
              <Tooltip
                placement='topRight'
                title={`${props.data?.fetchBoard.boardAddress?.address ?? ''} 
                      ${props.data?.fetchBoard.boardAddress?.addressDetail ?? ''}`}
              >
                <S.LinkIcon src='/images/board/ic_location.svg' />
              </Tooltip>
            </S.Address>
          </S.AddressWrapper>
        </S.WriterWrapper>
        <S.ContentsWrapper>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          {props.data?.fetchBoard.youtubeUrl !== '' && (
            <S.YoutubePlayer
              url={props.data?.fetchBoard.youtubeUrl ?? ''}
              width='486px'
              height='240px'
            />
          )}
        </S.ContentsWrapper>
      </Wrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </S.BottomWrapper>
    </>
  );
}
