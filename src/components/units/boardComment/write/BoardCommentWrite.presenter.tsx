import * as S from './BoardCommentWrite.styles';

import { BoardCommentWriteUIProps } from './BoardCommentWrite.types';

export default function BoardCommentWriteUI(props: BoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      <S.FlexBox>
        <S.CommentIcon src='/images/boardComment/comment.svg' />
        <span>댓글</span>
      </S.FlexBox>
      <S.InputWrapper>
        <S.Input placeholder='작성자' onChange={props.onChangeWriter} value={props.writer} />
        <S.Input
          type='password'
          placeholder='비밀번호'
          onChange={props.onChangePassword}
          value={props.password}
        />
        <S.Star onChange={props.setStar} />
      </S.InputWrapper>
      <S.CommentBox>
        <S.Comment
          maxLength={100}
          placeholder='개인정보를 공유 및 요청하거나, 명예훼손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
          onChange={props.onChangeContents}
          value={props.contents}
        />
      </S.CommentBox>
      <S.ButtonWrapper>
        <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
        <S.Button onClick={props.onClickWrite}>등록하기</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
