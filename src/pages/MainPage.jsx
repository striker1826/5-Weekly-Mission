import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { getRequest } from "../api";
import { SearchBar } from "../components/SearchBar";
import { LinkList } from "../components/LinkList";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  const [owner, setOwner] = useState(null);
  const [folderData, setFolderData] = useState({ name: "", links: [] });

  const getFolderData = async () => {
    const { folder } = await getRequest("api/sample/folder", null);

    setOwner(() => {
      return folder.owner;
    });

    setFolderData(() => {
      return {
        name: folder.name,
        links: folder.links,
      };
    });
  };

  useEffect(() => {
    getFolderData();
  }, []);

  return (
    <>
      <Header profileImg={owner?.profileImageSource} ownerName={owner?.name} folderName={folderData.name} />
      <Main>
        <SearchBar />
        <LinkList linkList={folderData.links} />
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
  }
`;
