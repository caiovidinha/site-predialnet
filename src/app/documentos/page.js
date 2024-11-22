"use client"
import CarouselComponent from "@/components/Carousel";
import DocumentsPage from "@/components/DocumentsPage";
import Footer from "@/components/Footer";
import React, {useState} from 'react'


export default function Home() {
  return (
    <>
    <DocumentsPage />
    <Footer />
    </>
  );
}
