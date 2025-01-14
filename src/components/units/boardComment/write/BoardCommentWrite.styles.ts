import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: calc(100vw - 500px);
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    margin-top: 80px;
    border-top: 1px solid #BDBDBD;
`
export const FlexBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 40px;
    font-weight: 900;
`

export const CommentIcon = styled.img`
`

export const InputWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 40px;
`

export const Input = styled.input`
    border-radius: 0;

    :focus {
        outline:none;
    }
`

export const CommentBox = styled.div`
    width: 100%;
    margin-top: 20px;
    border: 1px solid #BDBDBD;
    border-bottom: 1px solid #F2F2F2;
`

export const Comment = styled.textarea`
    width: 100%;
    resize: none;
    min-height: 108px;
    margin: 0;
    padding: 20px;
    line-height: 1.5;
    border: none;
    
    :focus {
        outline: none;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #BDBDBD;
    border-top: none;
`

export const ContentsLength = styled.div`
    width: 100%;
    height: 51px;
    line-height: 51px;
    padding-left: 20px;
    color: #BDBDBD;
    
`

export const Button = styled.button`
    width: 91px;
    height: 51px;
    background-color: black;
    color: white;
    border: none;
`