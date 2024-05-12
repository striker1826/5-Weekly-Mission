import Image from "next/image";
import React from "react";
import styles from "@/widgets/home/styles/Header.module.css";
import logo from "@/public/img/logo.svg";
import GradientSkyblueBtn from "@/components/button/ui/GradientSkyblueBtn";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
      <div className={styles.wrap}>
        <GradientSkyblueBtn text={"로그인"} />
      </div>
    </header>
  );
};

export default Header;
