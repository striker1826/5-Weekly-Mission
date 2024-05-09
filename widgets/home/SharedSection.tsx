import Image from "next/image";
import React from "react";
import shared_section_img from "@/public/img/home/shared_section.png";
import shared_section_popup from "@/public/img/home/shared_section_popup.png";

const SharedSection = () => {
  return (
    <section className="my-[50px] flex items-center justify-center gap-[157px]">
      <div className="flex w-[290px] flex-col gap-[10px] pr-[15px]">
        <p className="text-[48px] font-[700] leading-[-0.3px] text-[#000]">
          저장한 링크를{" "}
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
      <div className="relative">
        <Image
          className="rounded-[25px] brightness-50"
          src={shared_section_img}
          alt="Shared Section img"
          width={550}
          height={450}
        />
        <Image
          className="absolute left-[50px] top-[50px] translate-x-[0%] translate-y-[25%]"
          src={shared_section_popup}
          alt="Shared Section Popup img"
          width={416}
          height={271}
        />
      </div>
    </section>
  );
};

export default SharedSection;
