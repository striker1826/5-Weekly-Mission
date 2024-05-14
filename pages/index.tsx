
import Header from "@/widgets/folder/ui/Header";
import Footer from "@/widgets/home/ui/Footer";
import MainSection from "@/widgets/home/ui/MainSection";
import ManagedSection from "@/widgets/home/ui/ManagedSection";
import SaveSection from "@/widgets/home/ui/SaveSection";
import SearchedSection from "@/widgets/home/ui/SearchedSection";
import SharedSection from "@/widgets/home/ui/SharedSection";


export default function Home() {
  return (
    <>

      <Header />
      <MainSection />
      <SaveSection />
      <ManagedSection />
      <SharedSection />
      <SearchedSection />
      <Footer />
    </>
  );

}
