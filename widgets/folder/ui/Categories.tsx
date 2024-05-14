import React from "react";
import Category from "@/components/category/ui/Category";
import styles from "@/widgets/folder/styles/categories.module.css";
import useGetCategoryList from "@/hooks/category/useGetCategoryList";
import { useCategoryState } from "@/hooks/category/useCategoryState";
import bluePlusIcon from "@/public/img/folder/bluePlus.svg";
import Image from "next/image";

const Categories = () => {
  const { categoryList } = useGetCategoryList();
  const { setCategoryId } = useCategoryState();

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <Category
          onClick={() => setCategoryId(null)}
          category={{ name: "전체", id: 0 }}
        />
        {categoryList?.map((category) => {
          return (
            <Category
              onClick={() => setCategoryId(category.id)}
              key={category.id}
              category={category}
            />
          );
        })}
      </div>
      <button className={styles.addFolderBtn}>
        <p>폴더추가</p>
        <Image src={bluePlusIcon} alt="bluePlusIcon" width={16} height={16} />
      </button>
    </div>
  );
};

export default Categories;
