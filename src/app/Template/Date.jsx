import Maps from "@/components/maps";
import Countdown from "react-countdown";
import rendererCountDown from "./countDown";
import CountDowns from "./countDowns";
export default function Date(props) {
    const {date} = props
  return (
    <div
      id="Date"
      className="mt-24 flex justify-center items-center flex-col scroll-mt-9"
    >
      <h4 className="mx-4  text-2xl text-[#D6CDB5] text-center font-spring">
        Save The Date
      </h4>
      <div className="mt-4 flex flex-col justify-center items-center">
        <h4 className="mx-6 text-xs mb-6 text-[#D6CDB5]  text-center">
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
          serta Kerabat sekalian untuk menghadiri acara pernikahan kami pada:
        </h4>
        {/* <Countdown
          date={date}
          renderer={rendererCountDown}
        ></Countdown> */}
        <CountDowns></CountDowns>
        <h4 className="mt-4 text-md text-[#D6CDB5]">Kamis, 8 Oktomber 2025</h4>
      </div>

      <div className="mt-16 flex justify-center items-center flex-col">
        <h4 className=" mx-4 text-3xl text-[#D6CDB5] text-center font-spring text">
          Akad
        </h4>
        <h4 className="mt-6 text-sm text-[#D6CDB5]">Kamis, 8 Oktomber 2025</h4>
        <h4 className="mt-2 text-sm text-[#D6CDB5]">
          pukul 09:00 WIB - selesai
        </h4>
        <h4 className="mt-2 mx-4 text-sm text-[#D6CDB5] text-center">
          Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia, Kota
          Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia
        </h4>
      </div>

      <div className="mt-16 flex justify-center items-center flex-col">
        <h4 className=" mx-4 text-3xl text-[#D6CDB5] text-center font-spring text">
          Resepsi
        </h4>
        <h4 className="mt-6 text-sm text-[#D6CDB5]">Kamis, 8 Oktomber 2025</h4>
        <h4 className="mt-2 text-sm text-[#D6CDB5]">
          pukul 09:00 WIB - selesai
        </h4>
        <h4 className="mt-2 mx-4 text-sm text-[#D6CDB5] text-center">
          Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia, Kota
          Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia
        </h4>
      </div>
      <div className="mt-9">
        <Maps></Maps>
      </div>
    </div>
  );
}
