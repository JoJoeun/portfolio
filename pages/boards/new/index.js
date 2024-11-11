import {useState} from 'react'
import {
    Wrapper,
    Title,
    WriterWrapper,
    InputWrapper,
    Error,
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
    const [board, setBoard] = useState({ writer : "", password : "", title : "", contents : ""} );
    const [error, setError] = useState({ writer : "", password : "", title : "", contents : ""} );

    const validators = {        
        // writer : {isValid : !!value, message : "작성자를 입력해주세요."},
        // password : {isValid : !!value, message : "비밀번호를 입력해주세요."},
        // title : {isValid : !!value, message : "제목을 입력해주세요."},
        // contents : {isValid : !!value, message : "내용을 입력해주세요."}
        
        // 중복값 삭제
        writer : { message : "작성자를 입력해주세요." },
        password : { message : "비밀번호를 입력해주세요." },
        title : { message : "제목을 입력해주세요." },
        contents : { message : "내용을 입력해주세요." }
    }

    // 유효성 검사해주는 함수
    const validateField = (name, value) => {
        // validators의 객체 안에서 name에 해당하는 속성의 값을 가져와 validator에 저장
        // ex. name이 writer일 때
        // → {isValid : !!value, message : "작성자를 입력해주세요."}
        // const validator = validators[name];
        // return validator.isValid 
        //     ? "" 
        //     : validator.message;

        // 코드 개선
        // !! : truthy한 값은 true로 falsy한 값은 false로 반환
        // !"" 는 truthy한 값, value의 존재 여부에 따라 값을 명확하게 설정하기 위해서 사용
        // VALUE가  truthy한 경우 유효하다고 판단
        const isValid = !!value;
        return isValid
            ? ""
            : validators[name].message;

    }

    const onChangeBoard = (e) => {
        const { name, value } = e.target;
        setBoard((prev) => ({ ...prev, [name] : value }));
        setError((prev) => ({
            // 이 전 값 복사
            ...prev,
            // name 값에 해당하는 속성을 validateField에서 가져와서
            // name, value를 참조.
            [name] : validateField(name,value)
        }));
    }

    // 전체 유효성 검사
    const validateForm = () => {
        // 각 필드의 에러 메시지를 저장하기 위한 객체
        // name을 key로 하여 각 필드의 에러 message를 저장
        // ex. newError.writer = "작성자를 입력해주세요." 
        const newError = {}
        let isValid = true;

        // Object.entries(변수)
        // 변수 객체의 key-value 쌍을 배열 형태로 반환.
        // ex. {writer : alice} → [["writer", "alice"]]
        // 배열의 첫 요소는 필드 이름(name), 두번쨰 요소는 필드 깂(value)
        Object.entries(board).
        // 반환된 배열에 대해 각 key(name → writer,password...) 값(value → message...)
        // 반복작업을 수행한다.
        forEach(([name,value]) => {
            // validateField의 name과 value를 받아,
            // 유효성 검사 결과를 할당한다.
            // 유효하면 true결과의 메세지를 반환
            // 유효하지 않으면 false 결과의 메세지를 반환.
            // ex. validateField("password", "") → "비밀번호를 입력해주세요." 반환
            const errorMessage = validateField(name,value);
            // 각 필드에 대한 errorMessage를 newError에 저장
            // ex. name이 "password", errorMessage가 "비밀번호를 입력해주세요" 라면
            // → newError.password = "비밀번호를 입력해주세요."
            newError[name] = errorMessage;
            // 만약 errorMessage가 빈 문자열이 아닐 경우 
            // 즉, 유효성 검사가 실패할 경우
            // → 이 떄, errorMessage는 빈 문자열이 아니기 떄문에 true임
            if(errorMessage)
                // 하나라도 유효하지 않으면! isValid를 false로 유지
                isValid = false;
        });

        // 유효성 검사를 마치고 검사가 실패할 경우, 에러 메세지 노출
        setError(newError);
        // 검사를 모두 통과하면 isValid를 true 로
        // 반대의 경우엔 false로 반환
        return isValid;
    }

    // 제출 버튼을 누르면 유효성 검사를 실행합니다.
    const onClickSubmit = () => {
        // 유효성 검사에 성공하면,
        //  → isValid가 true로 반환되면,
        if(validateForm()) {
            alert("게시글이 등록되었습니다.");
        }

        // if(Object.values(board).every((value) => value)) {
            // Object.values(변수) : 변수 객체의 모든 값만을 배열로 반환한다.
            // → board 객체의 모든 값을 배열로 반환
            // every((value) => value) : 배열의 모든 값이 truthy한지 확인한다.
            // → board 값 배열의 모든 값이 truthy한지 확인
        //     alert("게시글이 등록되었습니다.")
        // }
    }

    return (
        <>
            <Wrapper>
                <Title>게시물 등록</Title>
                <WriterWrapper>
                    <InputWrapper className='half'>
                        <Label>작성자</Label>
                        <UserInput type='text' name="writer" placeholder = "이름을 적어주세요." onChange={onChangeBoard}/>
                        <Error>{error.writer}</Error>
                    </InputWrapper>
                    <InputWrapper className='half'>
                        <Label>비밀번호</Label>
                        <UserInput type='password' name="password" placeholder="비밀번호를 작성해주세요." onChange={onChangeBoard}/>
                        <Error>{error.password}</Error>
                    </InputWrapper>
                </WriterWrapper>
                <InputWrapper>
                    <Label>제목</Label>
                    <Subject type="text" name="title" placeholder="제목을 작성해주세요." onChange={onChangeBoard}/>
                    <Error>{error.title}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>내용</Label>
                    <Contents name="contents" placeholder="내용을 작성해주세요." onChange={onChangeBoard}/>
                    <Error>{error.contents}</Error>
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
                    <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
                </ButtonWrapper>
            </Wrapper>
        </>
    )

}