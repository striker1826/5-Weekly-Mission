import Image from "next/image";
import React from "react";

import logo from "@/public/img/logo.svg";
import GradientSkyblueBtn from "@/components/GradientSkyblueBtn";

const Header = () => {
  return (
    <div className="sticky top-0 bg-Gray5 px-[200px] py-[20px]">
      <div className="flex justify-between">
        <Image src={logo} alt="logo" width={133} height={24} />
        <GradientSkyblueBtn width={"128"} text={"로그인"} />
      </div>
    </div>
  );
};

export default Header;
