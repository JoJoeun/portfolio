import styled from '@emotion/styled';
import { Modal, Rate } from 'antd';

export const CommentWrapper = styled.div`
  width: calc(100vw - 500px);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 10px;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MainWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const Avatar = styled.img``;

export const CommentBox = styled.div``;

export const WriterWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-item: center;
`;

export const Writer = styled.div`
  font-weight: 900;
`;

export const Comment = styled.div`
  color: #4f4f4f;
  margin-top: 4px;
`;

export const OptionWrapper = styled.div``;

export const UpdateIcon = styled.img`
  margin-right: 8px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  cursor: pointer;
`;

export const Date = styled.div`
  margin-top: 20px;
  margin-left: 60px;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
`;

export const star = styled(Rate)``;

export const PasswordModal = styled(Modal)``;

export const passwordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
