import React from "react";

interface PropsType {
  width: string;
  text: string;
}

const GradientSkyblueBtn: React.FC<PropsType> = ({ width, text }) => {
  return (
    <button
      className={`w-[${width}px] rounded-[8px] bg-gradient-to-r from-purple-600 to-sky-400 px-[20px] py-[16px] text-[18px] font-[600] text-neutral-100`}
    >
      {text}
    </button>
  );
};

export default GradientSkyblueBtn;
