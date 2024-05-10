import Image from "next/image";
import React from "react";
import shared_section_img from "@/public/img/home/shared_section.png";

import { cn } from "@/utils/tailwind";

const SharedSection = () => {
  return (
    <section
      className={cn(
        "mt-[100px] flex items-center justify-center",
        "tablet:gap-[51px]",
        "web:gap-[157px]",
      )}
    >
      <div className="flex w-[290px] flex-col gap-[10px] pr-[15px]">
        <p className="text-[48px] font-[700] leading-[-0.3px] text-[#000]">
          저장한 링크를
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-400 bg-clip-text text-transparent">
            공유
          </span>
          해 보세요.
        </p>
        <p className="text-[16px] font-[500] leading-[150%] text-[#6B6B6B]">
          여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
          쉽고 빠르게 링크를 공유해 보세요.
        </p>
      </div>
      <Image
        className={cn(
          "rounded-[25px]",
          "tablet:w-[385px] tablet:h-[315px]",
          "web:w-[550px] web:h-[450px]",
        )}
        src={shared_section_img}
        alt="Shared Section img"
        width={550}
        height={450}
      />
    </section>
  );
};

export default SharedSection;
