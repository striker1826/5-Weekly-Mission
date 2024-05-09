import React from "react";
import searchedSectionImg from "@/public/img/home/searched_section.png";
import Image from "next/image";

const SearchedSection = () => {
  return (
    <section className="mb-[120px] flex items-center justify-center gap-[157px] py-[50px]">
      <Image
        src={searchedSectionImg}
        alt="Searched Section img"
        width={550}
        height={450}
      />
      <div className="flex w-[290px] flex-col gap-[10px] pr-[20px]">
        <p className="text-[48px] font-[700] leading-[-0.3px] text-[#000]">
          저장한 링크를
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            검색
          </span>
          해 보세요
        </p>
        <p className="text-[16px] font-[500] leading-[150%] text-[#6B6B6B]">
          중요한 정보들을 검색으로 쉽게 찾아보세요.
        </p>
      </div>
    </section>
  );
};

export default SearchedSection;
