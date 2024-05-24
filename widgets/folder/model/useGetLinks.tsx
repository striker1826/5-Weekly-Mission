import { Link } from "@/types/link";
import { useFolderState } from "../../../shared/model/hooks/useFolderState";
import apiInstance from "../../../shared/model/api/axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useGetLinks = (folderId: any) => {
  const [linkDataList, setLinkDataList] = useState<Link[]>();
  const [error, setError] = useState();

  const getLinksData = async (folderId: number) => {
    try {
      let url = "/users/1/links";

      if (!folderId) {
        url = "/users/1/links";
      } else {
        url = `/users/1/links?folderId=${folderId}`;
      }

      const res = await apiInstance.get(url);
      const linkList = res.data.data;
      console.log(linkList);

      setLinkDataList(linkList);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.details || err.message);
      }
    }
  };

  useEffect(() => {
    getLinksData(folderId);
  }, [folderId]);

  return { linkDataList, error };
};

export default useGetLinks;
