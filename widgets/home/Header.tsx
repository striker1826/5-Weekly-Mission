import Image from "next/image";
import React from "react";

import logo from "@/public/img/logo.svg";
import GradientSkyblueBtn from "@/components/GradientSkyblueBtn";
import { cn } from "@/utils/tailwind";

const Header = () => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-Gray5 px-[32px] py-[20px]",
        "tablet:px-[32px]",
        "web:px-[200px]",
      )}
    >
      <div className="flex justify-between">
        <Image src={logo} alt="logo" width={133} height={24} />
        <div className={cn("hidden", "table:block", "web:block")}>
          <GradientSkyblueBtn width={128} text={"로그인"} />
        </div>
        <div className={cn("block", "table:hidden", "web:hidden")}>
          <GradientSkyblueBtn width={80} text={"로그인"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
