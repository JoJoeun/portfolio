import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

export const WriterWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Profile = styled.img``;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Writer = styled.span`
  font-size: 24px;
  line-height: 1.5em;
  color: #000;
`;

export const CreateAt = styled.span`
  font-size: 16px;
  color: #828282;
  line-height: 1.2em;
`;

export const AddressWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Youtube = styled.div``;

export const LinkIcon = styled.img`
  cursor: pointer;
`;

export const Address = styled.div``;

export const ContentsWrapper = styled.div`
  width: 100%;
  padding: 80px 0;
  color: #000;
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 1.5em;
`;

export const Contents = styled.p`
  width: 100%;
  display: block;
  margin-top: 40px;
  margin-bottom: 120px;
`;

export const YoutubePlayer = styled(ReactPlayer)`
  margin: auto;
`;

export const BottomWrapper = styled.div`
  width: calc(100% - 204px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  line-height: 1.5em;
`;
