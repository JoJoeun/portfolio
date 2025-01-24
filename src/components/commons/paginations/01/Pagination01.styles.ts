import styled from '@emotion/styled';

export const Column = styled.span`
  margin: 0 50px;
`;

// 페이지가 선택되었을 경우 타입
interface IPageProps {
  isActive?: boolean;
}

export const Page = styled.span<IPageProps>`
  margin: 0 10px;

  color: ${(props) => (props.isActive ? 'blue' : 'black')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  cursor: ${(props) => (props.isActive ? 'none' : 'pointer')};
`;
