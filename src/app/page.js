"use client"
import CarouselComponent from "@/components/Carousel";
import CarouselComponentEA from "@/components/CarouselEA";
import CarouselComponentMaiores from "@/components/CarouselMaiores";
import Plans from "@/components/Plans";
import Plans2 from "@/components/Plans2";
import Cards from "@/components/Cards";
// import Contrate from "@/components/Contrate";
import Why from "@/components/Why";
// import App from "@/components/App";
// import Image from "next/image";
// import PlansModal from "@/components/PlansModal";
// import Phone from "@/components/Phone";
// import Others from "@/components/Others";
// import Atendimento from "@/components/Atendimento";
import Footer from "@/components/Footer";
// import Cliente from "@/components/Cliente";
import React, {useState} from 'react'



export default function Home() {
  return (
    <>
    <CarouselComponent />
    <Plans />
    <Cards />
    <CarouselComponentEA />
    {/* <Contrate /> */}
    <Why />
    <CarouselComponentMaiores/>
    {/* <App /> */}
    {/* <Phone /> */}
    {/* <Cliente /> */}
    {/* <Others /> */}
    {/* <Atendimento /> */}
    <Plans2 />
    <Footer />
    </>
  );
}
