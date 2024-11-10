import {
    Wrapper,
    Title,
    WriterWrapper,
    InputWrapper,
    Label,
    UserInput,
    Subject,
    Contents,
    PostcodeWrapper,
    Postcode,
    SearchButton,
    Address,
    Youtube,
    ImageWrapper,
    UploadButton,
    RadioWrapper,
    RadioInput,
    RadioLabel,
    ButtonWrapper,
    SubmitButton
} from '../../../styles/boardsNew.js';

export default function BoardsNewPage() {
    const CustomRadio = ({checked, ...props}) => {
        
    }

    return (
        <>
            <Wrapper>
                <Title>게시물 등록</Title>
                <WriterWrapper>
                    <InputWrapper className='half'>
                        <Label>작성자</Label>
                        <UserInput type='text' placeholder = "이름을 적어주세요." />
                    </InputWrapper>
                    <InputWrapper className='half'>
                        <Label>비밀번호</Label>
                        <UserInput type='password' placeholder="비밀번호를 작성해주세요." />
                    </InputWrapper>
                </WriterWrapper>
                <InputWrapper>
                    <Label>제목</Label>
                    <Subject type="text" placeholder="제목을 작성해주세요." />
                </InputWrapper>
                <InputWrapper>
                    <Label>내용</Label>
                    <Contents placeholder="내용을 작성해주세요." />
                </InputWrapper>
                <InputWrapper>
                    <PostcodeWrapper>
                        <Postcode placeholder='07250' value="" />
                        <SearchButton>우편번호 검색</SearchButton>
                    </PostcodeWrapper>
                    <Address />
                    <Address className='detail' placeholder='상세 주소 입력'/>
                </InputWrapper>
                <InputWrapper>
                    <Label>유튜브</Label>
                    <Youtube placeholder="링크를 복사해주세요."/>
                </InputWrapper>
                <ImageWrapper>
                    <Label>사진첨부</Label>
                    <UploadButton>+Upload</UploadButton>
                    <UploadButton>+Upload</UploadButton>
                    <UploadButton>+Upload</UploadButton>
                </ImageWrapper>
                <InputWrapper>
                    <Label>메인 설정</Label>
                    <RadioWrapper>
                    {/* htmlFor : label이 특정 input 요소와 연결되도록 지정 */}
                        <RadioLabel htmlFor='youtube'>
                            <RadioInput type="radio" id="youtube" name="radio-input" />
                            <span className="custom-radio" />
                            유튜브
                        </RadioLabel>
                        <RadioLabel htmlFor="image">
                            <RadioInput type="radio" id="image" name="radio-input" />
                            <span className="custom-radio" />
                            사진
                        </RadioLabel>
                    </RadioWrapper>
                </InputWrapper>
                <ButtonWrapper>
                    <SubmitButton>등록하기</SubmitButton>
                </ButtonWrapper>
            </Wrapper>
        </>
    )

}