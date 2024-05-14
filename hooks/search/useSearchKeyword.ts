import { Link } from "@/types/link";
import { useKeywordState } from "./useSearchState";

const useSearchKeyword = (linkList: Link[] | undefined) => {
  const { keyword } = useKeywordState();
  if (!linkList) return;

  const filteredData = linkList.filter((link) =>
    link.description?.includes(keyword),
  );

  return filteredData;
};

export default useSearchKeyword;
