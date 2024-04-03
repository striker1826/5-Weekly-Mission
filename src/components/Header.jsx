import styled from "styled-components";
import { GlobalNavbar } from "./GlobalNavbar";
import linkIcon from "../assets/linkIcon.svg";

export const Header = ({ profileImg, ownerName, folderName }) => {
  return (
    <>
      <Container>
        <GlobalNavbar />
        {profileImg && ownerName && folderName ? (
          <ProfileContainer>
            <StyledProfileImg src={profileImg} />
            <OwnerName>{ownerName}</OwnerName>
            <FolderName>{folderName}</FolderName>
          </ProfileContainer>
        ) : (
          <AddLinkContainer>
            <AddLinkBox>
              <img src={linkIcon} alt="link" />
              <input placeholder="링크를 추가해 보세요" />
              <AddLinkBtn>추가하기</AddLinkBtn>
            </AddLinkBox>
          </AddLinkContainer>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.color.Gray5};
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 60px;
`;

const StyledProfileImg = styled.img`
  width: 60px;
  height: 60px;
`;

const OwnerName = styled.span`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 400;
`;

const FolderName = styled.span`
  margin-top: 20px;
  font-size: 40px;
  font-weight: 600;
`;

const AddLinkContainer = styled.div`
  padding: 60px 320px 90px 320px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 60px 32.5px 90px 32.5px;
  }
`;

const AddLinkBox = styled.div`
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
  color: var(--Linkbrary-gray60, #9fa6b2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  img {
    width: 20px;
    height: 20px;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    margin-right: auto;
  }
`;

const AddLinkBtn = styled.button`
  border-radius: 8px;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  padding: 10px 16px;
  border: none;
  color: var(--Grey-Light, #f5f5f5);
  width: 120px;
`;
