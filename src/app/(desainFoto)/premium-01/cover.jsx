'use client'
import { Button } from "@material-tailwind/react";
export default function Cover({toggleOpen}) {
  return (
    <div
      style={{ backgroundImage: `url('/images/desain01bg.png')` }}
      className=" min-h-screen bg-center flex items-center justify-center flex-col"
    >
      <div className="flex flex-col justify-center items-center text-4xl font-spring  text-[#D6CDB5]">
        <h2>Romeo</h2>
        <h2 className="my-2">&</h2>
        <h2>Juliet</h2>
      </div>

      <div className=" mt-9 text-xl flex flex-col justify-center items-center text-[#D6CDB5]">
        <h4>Dear, </h4>
        <h4>"Nama Tamu"</h4>
      </div>

      <h4 className="mt-6 text-md text-[#D6CDB5]">Kamis, 8 Oktomber 2025</h4>
      <Button
        onClick={toggleOpen}
        size="md"
        variant="gradient"
        className="mt-6 rounded-full text-[#D6CDB5] transform transition-transform hover:scale-110 animate-bounce"
      >
        Buka Undangan
      </Button>
    </div>
  );
}
