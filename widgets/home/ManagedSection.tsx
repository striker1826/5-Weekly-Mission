import React from "react";
import managed_section_img from "@/public/img/home/managed_section.png";
import Image from "next/image";
import { cn } from "@/utils/tailwind";

const ManagedSection = () => {
  return (
    <section
      className={cn(
        "items-left mb-[50px] mt-[100px] flex w-full flex-col justify-center gap-[20px] px-[32px]",
        "tablet:flex tablet:flex-row tablet:items-center tablet:gap-[51px]",
        "web:flex web:flex-row web:gap-[157px] web:items-center",
      )}
    >
      <p
        className={cn(
          "w-full text-left text-[24px] font-[700] leading-[-0.3px] text-[#000]",
          "tablet:hidden",
          "web:hidden",
        )}
      >
        링크를 폴더로 &nbsp;
        <span className="bg-gradient-to-br from-yellow-300 via-transparent to-blue-400 bg-clip-text text-transparent">
          관리
        </span>
        하세요
      </p>
      <Image
        className={cn(
          "h-full w-full",
          "tablet:w-[385px] tablet:h-[315px]",
          "web:w-[550px] web:h-[450px]",
        )}
        src={managed_section_img}
        alt="managed_section_img"
        width={550}
        height={450}
      />
      <div
        className={cn(
          "flex flex-col gap-[10px] ",
          "tablet:pr-[20px] tablet:w-[290px]",
          "web:pr-[20px] web:w-[290px]",
        )}
      >
        <p
          className={cn(
            "hidden text-[48px] font-[700] leading-[-0.3px] text-[#000]",
            "tablet:block",
            "web:block",
          )}
        >
          링크를 폴더로
          <span className="bg-gradient-to-br from-yellow-300 via-transparent to-blue-400 bg-clip-text text-transparent">
            관리
          </span>
          하세요
        </p>
        <p className="w-full text-[16px] font-[500] leading-[150%] text-[#6B6B6B]">
          나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default ManagedSection;
