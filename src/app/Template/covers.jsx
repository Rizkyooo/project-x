import Countdown from "react-countdown";
import rendererCountDown from "@/app/Template/countDown";
import Link from "next/link";
import CountDowns from "./countDowns";
export default function Covers( props ) {
    const {date}=props
  return (
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
      <div data-aos="fade-right" className="text-[#314361] text-sm font-bold">
        <CountDowns></CountDowns>
        {/* <Countdown
          date={date}
          renderer={rendererCountDown}
        ></Countdown> */}
      </div>
      <h4 data-aos="fade-right" className="mt-6 text-sm text-[#D6CDB5]">
        Kamis, 8 Oktomber 2025
      </h4>
      <Link data-aos="fade-right" href={"#Date"}>
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
  );
}
