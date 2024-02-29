 const rendererCountDown = ({ days, hours, minutes, seconds, completed }) => {
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

  export default rendererCountDown;