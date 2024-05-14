import React from "react";
import styles from "@/components/category/styles/category.module.css";
import { Category } from "@/types/category";
import { useCategoryState } from "@/hooks/category/useCategoryState";

interface CategoryProps {
  category: Category;
  onClick: () => void;
}

const Category = ({ category, onClick }: CategoryProps) => {
  const { categoryId } = useCategoryState();
  const isSelected = categoryId === category.id;

  return (
    <button
      onClick={onClick}
      className={isSelected ? styles.select : styles.container}
    >
      {category.name}
    </button>
  );
};

export default Category;
