import Link from "next/link";
import Countdown from "react-countdown";
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
    <div>
      <div
        style={{ backgroundImage: `url('/images/desain01bg.png')` }}
        className=" min-h-screen bg-center flex items-center justify-center flex-col"
      >
        <h4 data-aos="fade-right" className=" mb-16 text-[#D6CDB5]">The Wedding of</h4>
        <div
          data-aos="fade-up"
          
          className="flex flex-col justify-center items-center text-3xl font-spring  text-[#D6CDB5]"
        >
          <h2>Romeo</h2>
          <h2 className="my-2">&</h2>
          <h2>Juliet</h2>
        </div>
        <p data-aos="zoom-in" className="p-9 mt-6 text-[#D6CDB5] text-[12px] text-center">
          Kami berharap Anda menjadi bagian dari hari istimewa kami!
        </p>
        <div data-aos="fade-right" className="text-[#314361] text-sm font-bold">
          <Countdown
            date={new Date("2024-02-28T00:00:00")}
            renderer={renderer}
          ></Countdown>
        </div>
        <h4 data-aos="fade-right"className="mt-6 text-sm text-[#D6CDB5]">Kamis, 8 Oktomber 2025</h4>
        <Link data-aos="fade-right" href={'#'}>
        <button className="bg-[#D6CDB5] text-[#314361] px-4 py-1 mt-4 rounded-md font-bold" >Save The Date</button>
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
    </div>
  );
}
