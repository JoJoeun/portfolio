import * as S from './BoardWrite.styles';
import { Wrapper } from '../../../../../styles/global'

export default function BoardWriteUI(props){
    return(
        <>
            <Wrapper>
                <S.Title>게시물 등록</S.Title>
                <S.WriterWrapper>
                    <S.InputWrapper className='half'>
                        <S.Label>작성자</S.Label>
                        <S.UserInput type='text' name="writer" placeholder = "이름을 적어주세요." onChange={props.onChangeBoard}/>
                        <S.Error>{props.error.writer}</S.Error>
                    </S.InputWrapper>
                    <S.InputWrapper className='half'>
                        <S.Label>비밀번호</S.Label>
                        <S.UserInput type='password' name="password" placeholder="비밀번호를 작성해주세요." onChange={props.onChangeBoard}/>
                        <S.Error>{props.error.password}</S.Error>
                    </S.InputWrapper>
                </S.WriterWrapper>
                <S.InputWrapper>
                    <S.Label>제목</S.Label>
                    <S.Subject type="text" name="title" placeholder="제목을 작성해주세요." onChange={props.onChangeBoard}/>
                    <S.Error>{props.error.title}</S.Error>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>내용</S.Label>
                    <S.Contents name="contents" placeholder="내용을 작성해주세요." onChange={props.onChangeBoard}/>
                    <S.Error>{props.error.contents}</S.Error>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.PostcodeWrapper>
                        <S.Postcode placeholder='07250' value="" />
                        <S.SearchButton>우편번호 검색</S.SearchButton>
                    </S.PostcodeWrapper>
                    <S.Address />
                    <S.Address className='detail' placeholder='상세 주소 입력'/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>유튜브</S.Label>
                    <S.Youtube placeholder="링크를 복사해주세요."/>
                </S.InputWrapper>
                <S.ImageWrapper>
                    <S.Label>사진첨부</S.Label>
                    <S.UploadButton>+Upload</S.UploadButton>
                    <S.UploadButton>+Upload</S.UploadButton>
                    <S.UploadButton>+Upload</S.UploadButton>
                </S.ImageWrapper>
                <S.ImageWrapper>
                    <S.Label>메인 설정</S.Label>
                    <S.RadioWrapper>
                    {/* htmlFor : label이 특정 input 요소와 연결되도록 지정 */}
                        <S.RadioLabel htmlFor='youtube'>
                            <S.RadioInput type="radio" id="youtube" name="radio-input" />
                            <span className="custom-radio" />
                            유튜브
                        </S.RadioLabel>
                        <S.RadioLabel htmlFor="image">
                            <S.RadioInput type="radio" id="image" name="radio-input" />
                            <span className="custom-radio" />
                            사진
                        </S.RadioLabel>
                    </S.RadioWrapper>
                </S.ImageWrapper>
                <S.ButtonWrapper>
                    <S.SubmitButton onClick={props.onClickSubmit}>등록하기</S.SubmitButton>
                </S.ButtonWrapper>
            </Wrapper>
        </>
    )
}