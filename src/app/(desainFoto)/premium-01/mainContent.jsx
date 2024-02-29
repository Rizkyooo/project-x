import Link from "next/link";
import Countdown from "react-countdown";
import Image from "next/image";
import { Fragment } from "react";
import BottomNav from "@/components/bottomNav";
import { LoveStory } from "@/components/loveStory";
import { WeddingGift } from "@/components/weddingGift";
import Kehadiran from "@/components/kehadiran";
import Maps from "@/components/maps";
import { Typography } from "@material-tailwind/react";
export default function MainContent() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Tampilkan pesan setelah countdown selesai
      return <span>Countdown selesai!</span>;
    } else {
      // Tampilkan countdown
      return (
        <div className="countdown flex gap-2">
          <div className=" px-1 h-10 w-20 bg-[#D6CDB5] flex items-center justify-center rounded-xl">
            {days} Hari
          </div>
          <div className="px-1 h-10 w-20 bg-[#D6CDB5] flex items-center justify-center rounded-xl">
            {hours} Jam
          </div>
          <div className="px-1 h-10 w-20 bg-[#D6CDB5] flex items-center justify-center rounded-xl">
            {minutes} Menit
          </div>
          <div className="px-1 h-10 w-20 bg-[#D6CDB5] flex items-center justify-center rounded-xl">
            {seconds} Detik
          </div>
        </div>
      );
    }
  };
  return (
    <Fragment>
      <div
        className="max-w-md mx-auto bg-[#314361] min-h-screen"
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        <div
          style={{ backgroundImage: `url('/images/desain01bg.png')` }}
          className=" p-20 bg-center flex items-center justify-center flex-col"
        >
          <h4 data-aos="fade-right" className=" mb-16 text-[#D6CDB5]">
            The Wedding of
          </h4>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center text-3xl font-spring  text-[#D6CDB5]"
          >
            <h2>Romeo</h2>
            <h2 className="my-2">&</h2>
            <h2>Juliet</h2>
          </div>
          <p
            data-aos="zoom-in"
            className="p-9 mt-6 text-[#D6CDB5] text-[12px] text-center"
          >
            Kami berharap Anda menjadi bagian dari hari istimewa kami!
          </p>
          <div
            data-aos="fade-right"
            className="text-[#314361] text-sm font-bold"
          >
            <Countdown
              date={new Date("2025-02-29T00:00:00")}
              renderer={renderer}
            ></Countdown>
          </div>
          <h4 data-aos="fade-right" className="mt-6 text-sm text-[#D6CDB5]">
            Kamis, 8 Oktomber 2025
          </h4>
          <Link data-aos="fade-right" href={"/#Date"}>
            <button className="bg-[#D6CDB5] text-[#314361] px-4 py-1 mt-4 rounded-md font-bold">
              Save The Date
            </button>
          </Link>
          <div className=" mt-12 animate-bounce ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#D6CDB5"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="bg-[#314361] my-9 flex  items-center flex-col">
          <Image
            src={"/images/bottom1.png"}
            alt="desain"
            width={200}
            height={200}
            className="rotate-180"
          />
          <p className=" mx-12 my-4 text-sm text-[#D6CDB5] text-center">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir.” (QS Ar-Rum : 21)
          </p>
          <Image
            src={"/images/bottom1.png"}
            alt="desain"
            width={200}
            height={200}
          />
        </div>
        <div id="Pasangan" className=" mt-20">
          <p className=" mx-6 mb-4  text-xs text-[#D6CDB5] text-center">
            Maha suci Allah yang telah menciptakan mahluk-Nya
            berpasang-pasangan. Ya Allah rahmatilah pernikahan kami :
          </p>
          <h4 className="mx-4 mt-14 text-2xl text-[#D6CDB5] text-center font-spring">
            The Wedding of
          </h4>
          <h4 className="mt-14 mx-4  text-4xl text-[#D6CDB5] text-center">
            Romeo Putra
          </h4>
          <p className=" mt-2 mx-4  text-sm text-[#D6CDB5] text-center">
            Putra Pertama dari
          </p>
          <p className=" mt-2 mx-4  text-sm text-[#D6CDB5] text-center">
            Bapak M. Husnaidi, S. Sos. & Ibu Sohriah
          </p>
          <h4 className="mt-9 mx-4  text-5xl text-[#D6CDB5] text-center font-spring">
            &
          </h4>
          <h4 className="mt-9 mx-4  text-4xl text-[#D6CDB5] text-center">
            Juliet
          </h4>
          <p className=" mt-2 mx-4  text-sm text-[#D6CDB5] text-center">
            Putra Pertama dari
          </p>
          <p className=" mt-2 mx-4  text-sm text-[#D6CDB5] text-center">
            Bapak M. Husnaidi, S. Sos. & Ibu Sohriah
          </p>
        </div>

        <div className="mt-24 flex flex-col justify-center items-center">
          <h4 className="mx-4  text-2xl text-[#D6CDB5] text-center font-spring">
            Our Love Story
          </h4>
          <div className="mt-9 ">
            <LoveStory></LoveStory>
          </div>
        </div>

        <div id="Date" className="mt-24 flex justify-center items-center flex-col scroll-mt-9">
          <h4 className="mx-4  text-2xl text-[#D6CDB5] text-center font-spring">
            Save The Date
          </h4>
          <div className="mt-4 flex flex-col justify-center items-center">
            <h4 className="mx-6 text-xs mb-6 text-[#D6CDB5]  text-center">
              Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
              serta Kerabat sekalian untuk menghadiri acara pernikahan kami pada:
            </h4>
            <Countdown
              date={new Date("2025-02-29T00:00:00")}
              renderer={renderer}
            ></Countdown>
            <h4 className="mt-4 text-md text-[#D6CDB5]">
              Kamis, 8 Oktomber 2025
            </h4>
          </div>

          <div className="mt-16 flex justify-center items-center flex-col">
            <h4 className=" mx-4 text-3xl text-[#D6CDB5] text-center font-spring text">
              Akad
            </h4>
            <h4 className="mt-6 text-sm text-[#D6CDB5]">
              Kamis, 8 Oktomber 2025
            </h4>
            <h4 className="mt-2 text-sm text-[#D6CDB5]">
              pukul 09:00 WIB - selesai
            </h4>
            <h4 className="mt-2 mx-4 text-sm text-[#D6CDB5] text-center">
              Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia,
              Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia
            </h4>
          </div>

          <div className="mt-16 flex justify-center items-center flex-col">
            <h4 className=" mx-4 text-3xl text-[#D6CDB5] text-center font-spring text">
              Resepsi
            </h4>
            <h4 className="mt-6 text-sm text-[#D6CDB5]">
              Kamis, 8 Oktomber 2025
            </h4>
            <h4 className="mt-2 text-sm text-[#D6CDB5]">
              pukul 09:00 WIB - selesai
            </h4>
            <h4 className="mt-2 mx-4 text-sm text-[#D6CDB5] text-center">
              Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia,
              Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia
            </h4>
          </div>
          <div className="mt-9">
            <Maps></Maps>
          </div>
        </div>

        <div id="Gift" className="mt-20 flex flex-col justify-center items-center">
          <h4 className=" mx-4 mb-2 text-3xl text-[#D6CDB5] text-center ">
            Wedding Gift
          </h4>
          <h4 className="mt-2 mb-6 text-xs mx-6 text-[#D6CDB5] text-center">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
            jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
            kado secara cashless.
          </h4>
          <WeddingGift></WeddingGift>
          <div className="flex justify-center items-center mt-20">
            <Kehadiran></Kehadiran>
          </div>
          
        </div>
        
      <footer className="mt-9 w-full h-20  bottom-0 flex justify-center items-center">
      <Typography color="blue-gray" className="text-center text-[#D6CDB5] font-normal">
        &copy; 2024 <span className="font-spring text-xs">NikahanKita</span>
        <hr />
      </Typography>
    </footer>
        <BottomNav></BottomNav>
      </div>
    </Fragment>
  );
}
