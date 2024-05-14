import React from "react";
import styles from "@/components/button/styles/GradientSkyblueBtn.module.css";

interface PropsType {
  text: string;
}

const GradientSkyblueBtn: React.FC<PropsType> = ({ text }) => {
  return <button className={`${styles.gradientSkyblueBtn}`}>{text}</button>;
};

export default GradientSkyblueBtn;
