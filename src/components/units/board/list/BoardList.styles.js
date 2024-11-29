import styled from '@emotion/styled'

export const TableWrapper = styled.div`
    width: calc(100vw - 500px);
    margin: 40px auto;
`

export const Table = styled.table`
    width: 100%;
    border-top: 1.5px solid #000;
    border-bottom: 1.5px solid #000;
`

export const BoardTr = styled.tr`
    &:not(:last-child) {
        border-bottom: 1px solid #BDBDBD;
    }
`

export const BoardTh = styled.th`
    font-size: 18px;
    line-height: 1.5em;
    padding: 14px 0;
`

export const BoardTd = styled.td`
    text-align: center;
`

export const ButtonWrapper = styled.div``

export const Button = styled.button``

export const PencilIcon = styled.img``