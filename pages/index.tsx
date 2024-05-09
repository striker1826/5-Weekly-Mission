import GradientSkyblueBtn from "@/components/GradientSkyblueBtn";
import Header from "@/widgets/home/Header";
import hero from "@/public/img/hero.png";
import Image from "next/image";
import MainSection from "@/widgets/home/MainSection";
import SaveSection from "@/widgets/home/SaveSection";
import ManagedSection from "@/widgets/home/ManagedSection";
import SharedSection from "@/widgets/home/SharedSection";
import SearchedSection from "@/widgets/home/SearchedSection";
import Footer from "@/widgets/home/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <SaveSection />
      <ManagedSection />
      <SharedSection />
      <SearchedSection />
      <Footer />
    </div>
  );
}
