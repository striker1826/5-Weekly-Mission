import { useState } from "react";
import { styled } from "styled-components";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { LinkList } from "../components/LinkList";
import { Footer } from "../components/Footer";
import { useGetFolder } from "../hooks/useGetFolder.jsx";
import { CategoryBtnList } from "../components/CategoryBtnList.jsx";
import { FolderEditBtns } from "../components/FolderEditBtns.jsx";

import plusIcon from "../assets/PlusIcon.svg";

export const SharedPage = () => {
  const [folderData] = useGetFolder();
  const [selectedCategory, setSelectedCategory] = useState("전체");

  return (
    <>
      <Header
        profileImg={folderData.owner?.profileImageSource}
        ownerName={folderData.owner?.name}
        folderName={folderData.name}
      />
      <Main $isFolderData={folderData.name}>
        <SearchBar />
        <Container>
          <CategoryBtnList />
          <AddFolderBtn>
            폴더 추가 <PlusIcon src={plusIcon} alt="플러스 아이콘" />
          </AddFolderBtn>
        </Container>

        <Container>
          <CategoryText>{selectedCategory}</CategoryText>
          <FolderEditBtns />
        </Container>
        {folderData ? (
          <LinkList linkList={folderData.links} />
        ) : (
          <NotFoundFolder>
            <p>저장된 링크가 없습니다.</p>
          </NotFoundFolder>
        )}
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 0 190px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 32px;
    margin-bottom:${({ $isFolderData }) => ($isFolderData ? "100px" : "367px")} 
  
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`;

const CategoryText = styled.span`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const AddFolderBtn = styled.button`
  color: ${({ theme }) => theme.color.GraPurpleblue};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;
  background: none;
  border: none;
  display: flex;
  gap: 4px;
  margin-top: 40px;
  cursor: pointer;
`;

const PlusIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const NotFoundFolder = styled.div`
  margin-top: 40px;
  padding: 41px 0;
  text-align: center;
`;
