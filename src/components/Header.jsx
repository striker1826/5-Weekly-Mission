import styled from "styled-components";
import { GlobalNavbar } from "./GlobalNavbar";
import { AddLinkBar } from "./AddLinkBar";

export const Header = ({ profileImg, ownerName, folderName }) => {
  return (
    <>
      <Container>
        <GlobalNavbar />
        {profileImg && ownerName && folderName ? (
          <ProfileHeader profileImg={profileImg} ownerName={ownerName} folderName={folderName} />
        ) : (
          <AddLinkBar />
        )}
      </Container>
    </>
  );
};

const ProfileHeader = ({ profileImg, ownerName, folderName }) => {
  return (
    <ProfileContainer>
      <StyledProfileImg src={profileImg} />
      <OwnerName>{ownerName}</OwnerName>
      <FolderName>{folderName}</FolderName>
    </ProfileContainer>
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
