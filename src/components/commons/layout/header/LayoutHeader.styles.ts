import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: pink;
  padding: 8px 30px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InnerLogo = styled.div`
  img {
    width: 150px;
  }
`;

export const InnerButton = styled.span`
  margin: 0 8px;
  cursor: pointer;
`;
