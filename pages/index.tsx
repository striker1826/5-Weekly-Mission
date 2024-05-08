import GradientSkyblueBtn from "@/components/GradientSkyblueBtn";
import Header from "@/widgets/Header";
import hero from "@/public/img/hero.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="flex-center bg-Gray5 px-[200px] pt-[70px] text-center">
        <p className="text-Black text-[64px] font-[700] leading-[80px]">
          <span className="bg-gradient-to-r from-indigo-600 to-pink-300 bg-clip-text text-transparent text-transparent">
            세상의 모든 정보
          </span>
          를<br /> 쉽게 저장하고 관리해 보세요
        </p>
        <div className="my-[40px]">
          <GradientSkyblueBtn width="350" text="링크 추가하기" />
        </div>
        <Image src={hero} alt="hero_img" />
      </section>
    </div>
  );
}
