import React from "react";

interface PropsType {
  width: number;
  text: string;
}

const GradientSkyblueBtn: React.FC<PropsType> = ({ width, text }) => {
  //TODO: widthPx 삭제할 예정
  const widthPx: Record<number, string> = {
    90: "w-[90px]",
    128: "w-[128px]",
    350: "w-[350px]",
    200: "w-[200px]",
  };

  return (
    <button
      className={`${widthPx[width]} rounded-[8px] bg-gradient-to-r from-purple-600 to-sky-400 px-[20px] py-[16px] text-[18px] font-[600] text-neutral-100`}
    >
      {text}
    </button>
  );
};

export default GradientSkyblueBtn;
