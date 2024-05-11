import React from "react";
import styles from "@/widgets/folder/styles/folderData.module.css";
import shareIcon from "@/public/img/folder/share.svg";
import editIcon from "@/public/img/folder/edit.svg";
import deleteIcon from "@/public/img/folder/delete.svg";
import CategoryHandle from "@/components/category/ui/CategoryHandle";
import LinkCard from "@/components/link/ui/LinkCard";
import useGetLinksData from "@/hooks/link/useGetLinksData";
import useSearchKeyword from "@/hooks/search/useSearchKeyword";

const FolderData = () => {
  const { linkDataList, error } = useGetLinksData();
  const filteredList = useSearchKeyword(linkDataList);

  return (
    <section className={styles.container}>
      <p className={styles.folderName}>유용한 글</p>
      <div className={styles.optionBtn}>
        <CategoryHandle src={shareIcon} text="공유" />
        <CategoryHandle src={editIcon} text="수정" />
        <CategoryHandle src={deleteIcon} text="삭제" />
      </div>
      {filteredList?.length ? (
        <div className={styles.linkList}>
          {filteredList.map((link) => {
            return <LinkCard key={link.id} link={link} />;
          })}
        </div>
      ) : (
        <div>
          <p className={styles.notFoundLink}>저장된 링크가 없습니다</p>
        </div>
      )}
    </section>
  );
};

export default FolderData;
