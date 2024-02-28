import Link from "next/link";
import Countdown from "react-countdown";
import Image from "next/image";
import { Fragment } from "react";
import BottomNav from "@/components/bottomNav";
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
              date={new Date("2024-02-29T00:00:00")}
              renderer={renderer}
            ></Countdown>
          </div>
          <h4 data-aos="fade-right" className="mt-6 text-sm text-[#D6CDB5]">
            Kamis, 8 Oktomber 2025
          </h4>
          <Link data-aos="fade-right" href={"#"}>
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
        <div className="h-screen mt-20">
          <h4></h4>
          <p className=" mx-4  text-xs text-[#D6CDB5] text-center">
            Maha suci Allah yang telah menciptakan mahluk-Nya
            berpasang-pasangan. Ya Allah rahmatilah pernikahan kami :
          </p>
          <h4 className="mt-20 mx-4  text-3xl text-[#D6CDB5] text-center font-spring">
            Romeo
          </h4>
          <p className=" mt-6 mx-4  text-sm text-[#D6CDB5] text-center">
            Putra Pertama dari
          </p>
          <p className=" mt-2 mx-4  text-sm text-[#D6CDB5] text-center">
            Bapak M. Husnaidi, S. Sos. & Ibu Sohriah
          </p>
          <h4 className="mt-12 mx-4  text-5xl text-[#D6CDB5] text-center font-spring">
            &
          </h4>
          <h4 className="mt-20 mx-4  text-3xl text-[#D6CDB5] text-center font-spring">
            Juliet
          </h4>
          <p className=" mt-6 mx-4  text-sm text-[#D6CDB5] text-center">
            Putra Pertama dari
          </p>
          <p className=" mt-2 mx-4  text-sm text-[#D6CDB5] text-center">
            Bapak M. Husnaidi, S. Sos. & Ibu Sohriah
          </p>
        </div>
        <BottomNav></BottomNav>
      </div>
    </Fragment>
  );
}
