import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full h-full text-gray-50">
      <div className="w-full h-full flex flex-col md:flex md:flex-row-reverse md:justify-center md:items-center bg-[#62D0D9] p-5">
        <div className="h-2/6 md:w-2/5">
          <div className="flex justify-center items-center ">
            <Image 
              width={800}
              height={800}
              src="/images/herox.png"
              alt="hero"
              
            />
          </div>
        </div>
        <div className="h-4/6 flex flex-col md:w-1/2">
          <h3 className="text-3xl font-bold text-[#314361] md:text-6xl">
            Buat Undangan Nikah Digital Dengan Desain Terbaik!
          </h3>
          <p className="text-sm mt-2 justify-start md:text-lg">
            Biarkan undangan pernikahan Anda berbicara sendiri dengan
            desain-desain kreatif dan inovatif dari tim kami. Dari gaya klasik
            hingga modern, kami memiliki berbagai opsi untuk mencerminkan
            kepribadian dan cerita cinta Anda dengan indah.
          </p>
          <Link href={"/#templateDesain"}>

          <button className="bg-[#967E76] text-white py-2 mt-4 rounded-md p-6 animate-bounce">
            Buat Undangan
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
