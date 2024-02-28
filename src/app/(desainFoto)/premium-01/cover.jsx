import { Button } from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Suspense } from "react"; // Import Suspense

export default function Cover({toggleOpen}) {
  useEffect(() => {
    Aos.init()
  },[])

  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Wrap your component with Suspense */}
      <CoverContent toggleOpen={toggleOpen} />
    </Suspense>
  );
}

function CoverContent({ toggleOpen }) {
  const searchParams = useSearchParams();
  const tamu = searchParams.get("tamu");
  return (
    <div className="max-w-md mx-auto bg-[#314361] min-h-screen">
<div 
      style={{ backgroundImage: `url('/images/desain01bg.png')` }}
      className=" min-h-screen  bg-center flex items-center justify-center flex-col"
    >
      <div data-aos="zoom-in" data-aos-delay="1000" className="flex flex-col justify-center items-center text-4xl font-spring  text-[#D6CDB5]">
        <h2>Romeo</h2>
        <h2 className="my-2">&</h2>
        <h2>Juliet</h2>
      </div>

      <div data-aos="fade-right" data-aos-delay="1500" className=" mt-9 text-md flex flex-col justify-center items-center text-[#D6CDB5]">
        <h4>Dear, </h4>
        <h4>{tamu || "bapak/ibu"}</h4>
      </div>

      <h4 data-aos="fade-right" data-aos-delay="2000" className="mt-6 text-sm text-[#D6CDB5]">Kamis, 8 Oktomber 2025</h4>
      <Button
        data-aos="zoom-out-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="3000"
        onClick={toggleOpen}
        size="md"
        variant="gradient"
        className="mt-6 rounded-full text-[#D6CDB5] transform transition-transform hover:scale-110 animate-bounce"
      >
        Buka Undangan
      </Button>
    </div>
    </div>
    
  );
}
