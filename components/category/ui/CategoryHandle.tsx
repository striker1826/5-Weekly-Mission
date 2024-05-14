import Image, { StaticImageData } from "next/image";
import React from "react";

interface CategoryHandleProps {
  src: StaticImageData;
  text: string;
}

const CategoryHandle = ({ src, text }: CategoryHandleProps) => {
  return (
    <button>
      <Image src={src} alt={`${text} icon`} width={15} height={15} />
      <p>{text}</p>
    </button>
  );
};

export default CategoryHandle;
