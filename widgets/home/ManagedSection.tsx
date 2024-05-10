import React from "react";
import managed_section_img from "@/public/img/home/managed_section.png";
import Image from "next/image";
import { cn } from "@/utils/tailwind";

const ManagedSection = () => {
  return (
    <section
      className={cn(
        "mb-[50px] mt-[100px] flex items-center justify-center",
        "tablet:gap-[51px]",
        "web:gap-[157px]",
      )}
    >
      <Image
        className={cn(
          "tablet:w-[385px] tablet:h-[315px]",
          "web:w-[550px] web:h-[450px]",
        )}
        src={managed_section_img}
        alt="managed_section_img"
        width={550}
        height={450}
      />
      <div className="flex w-[290px] flex-col gap-[10px] pr-[20px]">
        <p className="text-[48px] font-[700] leading-[-0.3px] text-[#000]">
          링크를 폴더로
          <span className="bg-gradient-to-br from-yellow-300 via-transparent to-blue-400 bg-clip-text text-transparent">
            관리
          </span>
          하세요
        </p>
        <p className="text-[16px] font-[500] leading-[150%] text-[#6B6B6B]">
          나만의 폴더를 무제한으로 만들고
          <br /> 다양하게 활용할 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default ManagedSection;
