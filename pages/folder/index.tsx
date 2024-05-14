import FixedAddFolderBtn from "@/components/button/ui/FixedAddFolderBtn";
import AddLink from "@/widgets/folder/ui/AddLink";
import Categories from "@/widgets/folder/ui/Categories";
import FolderData from "@/widgets/folder/ui/FolderData";
import Header from "@/widgets/folder/ui/Header";
import PaddingPage from "@/widgets/folder/ui/PaddingPage";
import SearchBar from "@/widgets/folder/ui/SearchBar";
import Footer from "@/widgets/home/ui/Footer";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <AddLink />
      <SearchBar />
      <PaddingPage>
        <Categories />
        <FolderData />
      </PaddingPage>
      <Footer />
      <FixedAddFolderBtn />
    </>
  );
};

export default index;
