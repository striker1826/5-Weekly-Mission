import styled from "styled-components";
import { GlobalNavbar } from "./GlobalNavbar";

export const Header = ({ profileImg, ownerName, folderName }) => {
  return (
    <>
      <Container>
        <GlobalNavbar />
        <ProfileContainer>
          <StyledProfileImg src={profileImg} />
          <OwnerName>{ownerName}</OwnerName>
          <FolderName>{folderName}</FolderName>
        </ProfileContainer>
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
