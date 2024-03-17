'use client'
import Hero from "@/components/hero";
import Fitur from "@/components/fitur";
import TemplateDesain from "@/components/templateDesain";
import Header from "@/components/header";
export default function Home() {
  
  return (
    <main className="">
      <Header></Header>
      <Hero></Hero>
      <Fitur></Fitur>
      <TemplateDesain data-aos="zoom-out-right"></TemplateDesain>
    </main>
  );
}
