'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";

export default function Hero(){
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            controls.start({
                scale: [1, 1.1, 1], // Animasi membesar dan mengecil
                transition: { duration: 1, repeat: Infinity }
            });
        }, 2000); // Interval animasi (dalam milidetik)

        return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
    }, [controls]);

    return (
        <div className="h-screen">
            <div className="w-full h-full grid-rows-2 md:grid-cols-2">
                <div className="bg-[#967E76] h-2/5">
                    <div className="w-full h-full flex justify-center items-center">
                        <Image width={360} height={360} src="/images/herox.png" alt="hero" className="mt-4"/>
                    </div>
                </div>
                <div className="h-3/5 flex flex-col ">
                    <h3 className="text-3xl font-bold text-gray-800 ml-4 mt-4">Buat Undangan Nikah Digital Dengan Desain Terbaik!</h3>
                    <p className="text-sm mt-2 ml-4 justify-start">Biarkan undangan pernikahan Anda berbicara sendiri dengan desain-desain kreatif dan inovatif dari tim kami. Dari gaya klasik hingga modern, kami memiliki berbagai opsi untuk mencerminkan kepribadian dan cerita cinta Anda dengan indah.</p>
                    <motion.button 
                        onClick={()=>{
                            window.location.href = "/#templateDesain"
                        }}
                        animate={controls}
                        className="bg-[#967E76] text-white py-2 mt-4 ml-4 rounded-md w-3/6"
                    >
                        Buat Undangan 
                    </motion.button>
                </div>
            </div>
        </div>
    )
}
