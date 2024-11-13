import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: calc(100vw - 500px);
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 40px;
    padding : 60px 102px;
    margin : 100px auto;
    border : 1px solid #BDBDBD;
    box-shadow : 0px 4px 20px rgba(0,0,0,0.2);

    &.flex-left {
        align-items : flex-start;
    }
`;