import styled from "@emotion/styled";

export const Title = styled.div`
    margin-bottom : 40px;
    font-size : 36px;
    font-weight : 700;
    line-height : 2em;
    color : black;
`;

export const WriterWrapper = styled.div`
    width : calc(100% - 204px);
    display : flex;
    justify-content : space-between;
`;

export const InputWrapper = styled.div`
    width : calc(100% - 204px);
    
    // 추가 className
    &.half {
        width : calc(50% - 12px);    
    }
`;

export const Error = styled.div`
    font-size : 14px;
    color : red;
`

export const Label = styled.span`
    display: block;
    margin-bottom : 16px;
    font-size : 16px;
    line-height: 1.5em;
`;

export const UserInput = styled.input`
    width : 100%;
`;

export const Subject = styled.input`
    width : 100%;
`;

export const Contents = styled.textarea`
    width : 100%;
    height : 480px;
    resize : none;
`;

export const PostcodeWrapper = styled.div`
    width : 100%;
    display : flex;
    margin-bottom : 16px;
`;

export const Postcode = styled.input`
    pointer-events : none;
    width : 77px;
    margin-right : 16px;
`;

export const SearchButton = styled.button`
    width : 124px;
    border : none;
    border-radius : 4px;
    background-color : #000;
    color : #fff;
`;

export const Address = styled.input`
    pointer-events : none;
    width : 100%;

    &.detail {
        pointer-events : auto;
        margin-top : 30px;
    }
`;

export const Youtube = styled.input`
    width : 100%;
`;

export const ImageWrapper = styled.div`
    width : calc(100% - 204px);
`;

export const UploadButton = styled.button`
    width : 78px;
    height : 78px;
    border : none;
    font-size : 12px;
    font-weight : bold;
    color : #4F4F4F;
    background-color : #BDBDBD;

    &:not(:last-child) {
        margin-right : 24px;
    }
`;

export const RadioWrapper = styled.div`
    width : 100%;
    display : flex;
`;

export const RadioInput = styled.input`
    display : none;
`;

export const RadioLabel = styled.label`
    display : flex;
    font-size : 16px;

    &:not(:last-child) {
        margin-right : 20px;
    }

    .custom-radio {
        display : inline-block;
        width : 20px;
        height : 20px;
        border : 1px solid #000;
        border-radius : 50%;
        position : relative;
        margin-right : 8px;
        cursor : pointer;
    }

    input[type="radio"]:checked + .custom-radio {
        border-color : #FFD600;
        background-color : #FFD600;
    }
    
    input[type="radio"]:checked + .custom-radio::after {
        content : "";
        width : 10px;
        height : 10px;
        background-color : #fff;
        border-radius : 50%;
        position : absolute;
        top : 50%;
        left : 50%;
        transform : translate(-50%, -50%);
    }
`;

export const ButtonWrapper = styled.div`
    padding : 40px 0;
`;

export const SubmitButton = styled.button`
    width : 179px;
    height : 52px;
    border : 1px solid #000;
    background-color : #fff;
    font-size : 16px;
    font-weight : bold;
    color : #000;

    background-color : ${(props) => props.isActive ? "#FFD600" : "#fff"};
    border-color : ${(props) => props.isActive ? "#FFD600" : "#000"};
`;
