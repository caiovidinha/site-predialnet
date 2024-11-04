import CarouselComponent from "@/components/Carousel";
import Plans from "@/components/Plans";
import Cards from "@/components/Cards";
import Contrate from "@/components/Contrate";
import Why from "@/components/Why";
import App from "@/components/App";
import Image from "next/image";
import Phone from "@/components/Phone";
import Others from "@/components/Others";
import Atendimento from "@/components/Atendimento";
import Footer from "@/components/Footer";
import Cliente from "@/components/Cliente";
export default function Home() {
  return (
    <>
    <CarouselComponent />
    <Plans />
    <Cards />
    <Contrate />
    <Why />
    <App />
    <Phone />
    <Cliente />
    <Others />
    <Atendimento />
    <Footer />
    
    </>
  );
}
