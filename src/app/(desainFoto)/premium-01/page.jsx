"use client";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MainContent from "./mainContent";
import Cover from "./cover";
 function PremiumSatuDesain() {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
    data-aos="flip-left"
     className="max-w-md mx-auto bg-[#314361] min-h-screen">
      {isOpen ? <Cover toggleOpen={toggleOpen}></Cover> : <MainContent></MainContent>}
    </div>
  );
}
