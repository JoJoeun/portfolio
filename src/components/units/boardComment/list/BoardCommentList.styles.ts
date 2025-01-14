import styled from '@emotion/styled';

export const CommentWrapper = styled.div`
    width: calc(100vw - 500px);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px 0;
    border-bottom: 1px solid #BDBDBD;

    :last-child {
        margin-bottom: 100px;
    }
`

export const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const MainWrapper = styled.div`
    display: flex;
    algin-items: center;
    gap: 12px;
`

export const Avatar = styled.img`
`

export const CommentBox = styled.div`
`

export const Writer = styled.div`
    font-weight: 900;
`

export const Comment = styled.div`
    color: #4f4f4f;
`

export const OptionWrapper = styled.div`
`

export const UpdateIcon = styled.img`
    margin-right: 8px;
`

export const DeleteIcon = styled.img`
    cursor: pointer;
`

export const Date = styled.div`
    margin-top: 20px;
    margin-left: 60PX;
    font-size: 12px;
    line-height: 18PX;
    color: #BDBDBD;
`

