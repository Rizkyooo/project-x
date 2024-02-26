"use client";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import MainContent from "./mainContent";
import Cover from "./cover";
export default function PremiumSatuDesain() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div class="max-w-md w-full bg-[#314361] min-h-screen">
      {isOpen ? <Cover toggleOpen={toggleOpen}></Cover> : <MainContent></MainContent>}
    </div>
  );
}
