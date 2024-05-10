import Image from "next/image";
import React from "react";
import save_section_img from "@/public/img/home/save_section.svg";
import { cn } from "@/utils/tailwind";

const SaveSection = () => {
  return (
    <section
      className={cn(
        "mb-[50px] mt-[120px] flex items-center justify-center gap-[157px]",
        "tablet:gap-[50px]",
      )}
    >
      <div className="flex w-[290px] flex-col gap-[10px] pr-[28px]">
        <p className="text-start text-[48px] font-[700] leading-[-0.3px]">
          <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
            원하는 링크
          </span>
          를 저장하세요
        </p>
        <p className="text-[16px] font-[500] leading-[150%] text-[#6B6B6B]">
          나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
          모든 것을 한 공간에 저장하세요.
        </p>
      </div>
      <Image
        className={cn("tablet:w-[385px] h-[315px]", "web:w-[550px] h-[450px]")}
        src={save_section_img}
        alt="save_section_img"
        width={550}
        height={450}
      />
    </section>
  );
};

export default SaveSection;
