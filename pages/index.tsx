import GradientSkyblueBtn from "@/components/GradientSkyblueBtn";
import Header from "@/widgets/Header";
import hero from "@/public/img/hero.png";
import Image from "next/image";
import MainSection from "@/widgets/home/MainSection";
import SaveSection from "@/widgets/home/SaveSection";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <SaveSection />
    </div>
  );
}
