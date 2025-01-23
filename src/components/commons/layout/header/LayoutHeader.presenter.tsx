import { InnerButton, InnerLogo, InnerWrapper, Wrapper } from './LayoutHeader.styles';
import { ILayoutHeaderProps } from './LayoutHeader.types';

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>
          <img src='/images/logo.png' />
        </InnerLogo>
        <InnerWrapper>
          <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          <InnerButton>회원가입</InnerButton>
        </InnerWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}
