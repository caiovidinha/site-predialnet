"use client"
import CarouselComponent from "@/components/Carousel";
import Plans from "@/components/Plans";
import Cards from "@/components/Cards";
import Contrate from "@/components/Contrate";
import Why from "@/components/Why";
import App from "@/components/App";
import Image from "next/image";
import PlansModal from "@/components/PlansModal";
import Phone from "@/components/Phone";
import Others from "@/components/Others";
import Atendimento from "@/components/Atendimento";
import Footer from "@/components/Footer";
import Cliente from "@/components/Cliente";
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setModalOpen, setSelectedPlan } from '../reducers/modalReducer';


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
