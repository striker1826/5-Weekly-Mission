import { Category } from "@/types/category";
import apiInstance from "@/utils/axios";
import React, { useEffect, useState } from "react";

const useGetCategoryList = () => {
  const [categoryList, setCategoryList] = useState<Category[]>();

  const getCategoryList = async () => {
    const res = await apiInstance.get("/users/1/folders");
    const categoryList = res.data.data;
    setCategoryList(categoryList);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return { categoryList };
};

export default useGetCategoryList;
