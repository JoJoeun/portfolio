import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  width: calc(100vw - 500px);
  margin: 40px auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top: 1.5px solid #000;
  border-bottom: 1.5px solid #000;
`;

export const BoardTr = styled.tr`
  font-size: 16px;
  line-height: 2.8em;
  &:not(:last-child) {
    border-bottom: 1px solid #bdbdbd;
  }
`;

export const BoardTh = styled.th`
  font-size: 18px;
  line-height: 1.5em;
  padding: 14px 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const BoardTd = styled.td`
  text-align: center;

  &:nth-child(2) {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  width: calc(100vw - 500px);
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  background: transparent;
  border: none;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const PencilIcon = styled.img`
  width: 24px;
  height: 24px;
`;
