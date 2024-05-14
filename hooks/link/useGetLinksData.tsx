import { Link } from "@/types/link";
import apiInstance from "@/utils/axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useCategoryState } from "../category/useCategoryState";

const useGetLinksData = () => {
  const [linkDataList, setLinkDataList] = useState<Link[]>();
  const [error, setError] = useState();
  const { categoryId } = useCategoryState();

  const getLinksData = async (categoryId: number) => {
    try {
      let url = "/users/1/links";

      if (categoryId === 0) {
        url = "/users/1/links";
      } else {
        url = `/users/1/links?folderId=${categoryId}`;
      }

      const res = await apiInstance.get(url);
      const linkList = res.data.data;

      setLinkDataList(linkList);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.details || err.message);
      }
    }
  };

  useEffect(() => {
    getLinksData(categoryId);
  }, [categoryId]);

  return { linkDataList, error };
};

export default useGetLinksData;
