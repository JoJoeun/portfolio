import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: pink;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  color: white;
  text-shadow:
    1px 1px 2px #ff66be,
    -1px -1px 2px #f9904c;

  :hover {
    font-weight: bold;
    text-shadow: none;
    color: black;
  }
`;
