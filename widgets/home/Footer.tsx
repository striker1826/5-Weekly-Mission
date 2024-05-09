import Image from "next/image";
import React from "react";
import facebook_icon from "@/public/img/home/facebook.svg";
import instagram_icon from "@/public/img/home/instagram.svg";
import twitter_icon from "@/public/img/home/twitter.svg";
import youtube_icon from "@/public/img/home/youtube.svg";

const Footer = () => {
  return (
    <footer className="flex h-[160px] w-full items-center justify-between bg-Black px-[104px] pb-[64px] pt-[32px]">
      <p className="text-[16px] font-[400] text-[#676767]">©codeit - 2023</p>
      <div className="flex gap-[30px] text-[16px] font-[400] text-[#CFCFCF]">
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className="flex gap-[12px]">
        <Image
          src={facebook_icon}
          alt="face book icon"
          width={20}
          height={20}
        />
        <Image src={twitter_icon} alt="twitter icon" width={20} height={20} />
        <Image src={youtube_icon} alt="youtube icon" width={20} height={20} />
        <Image
          src={instagram_icon}
          alt="instagram icon"
          width={20}
          height={20}
        />
      </div>
    </footer>
  );
};

export default Footer;
