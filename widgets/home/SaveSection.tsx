import Image from "next/image";
import React from "react";
import save_section_img from "@/public/img/home/save_section.svg";
import { cn } from "@/utils/tailwind";

const SaveSection = () => {
  return (
    <section
      className={cn(
        "items-left mb-[50px] mt-[40px] flex flex-col justify-center gap-[20px] px-[32px]",
        "tablet:flex tablet:flex-row tablet:mt-[120px] tablet:gap-[50px] tablet:items-center",
        "web:flex web:flex-row web:mt-[120px] web:gap-[157px] web:items-center",
      )}
    >
      <div
        className={cn(
          "w-[290px] flex-col gap-[10px] pr-[28px]",
          "tablet:flex",
          "web:flex",
        )}
      >
        <p
          className={cn(
            "text-[24px] font-[700] leading-[-0.3px]",
            "tablet:text-[48px]",
            "web:text-[48px]",
          )}
        >
          <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
            원하는 링크
          </span>
          를 저장하세요
        </p>
        <p
          className={cn(
            "hidden text-[16px] font-[500] leading-[150%] text-[#6B6B6B]",
            "tablet:block",
            "web:block",
          )}
        >
          나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
          모든 것을 한 공간에 저장하세요.
        </p>
      </div>
      <Image
        className={cn(
          "h-full w-full",
          "tablet:w-[385px] tablet:h-[315px]",
          "web:w-[550px] tablet:h-[450px]",
        )}
        src={save_section_img}
        alt="save_section_img"
        width={550}
        height={450}
      />
      <p
        className={cn(
          "block text-[16px] font-[500] leading-[150%] text-[#6B6B6B]",
          "tablet:hidden",
          "web:hidden",
        )}
      >
        나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
        모든 것을 한 공간에 저장하세요.
      </p>
    </section>
  );
};

export default SaveSection;
