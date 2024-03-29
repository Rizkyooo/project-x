import Image from "next/image";
export default function Fitur() {
  return (
    <div id="fitur" className="mt-10 ">
      <div className=" flex justify-center ">
        <h3 className="text-2xl font-bold text-gray-800 mr-4 md:text-3xl">
          Fitur Lengkap
          <hr className="border-2 border-[#967E76] mx-7 mt-1" />
        </h3>
      </div>

      <div className="mt-2 mx-4">
        <div className="flex flex-row-reverse gap-10 justify-center items-center">
          
          <div className="shadow-md h-full rounded-2xl bg-white p-4 px-20 border-2">
            <div className="flex items-center ">
              <svg
                className="h-8 w-8 text-green-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-md">Masa aktif 1 tahun</p>
            </div>

            <div className="flex items-center mt-2 ">
              <svg
                className="h-8 w-8 text-green-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className=" text-md">Sebar undangan sepuasnya</p>
            </div>

            <div className="flex items-center mt-2">
              <svg
                className="h-8 w-8 text-green-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" text-md">Revisi tanpa batas</p>
            </div>

            <div className="flex items-center mt-2">
              <svg
                className="h-8 w-8 text-green-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" text-md">Custom nama tamu</p>
            </div>

            <div className="flex items-center mt-2">
              <svg
                className="h-8 w-8 text-green-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" text-md">Konfirmasi Kehadiran & Ucapan</p>
            </div>

            <div className="flex items-center mt-2">
              <svg
                className="h-8 w-8 text-green-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" text-md">Bebas custom backsound</p>
            </div>

            <div className="flex items-center mt-2">
              <svg
                className="h-8 w-8 text-green-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" text-md">Amplop Digital & Gift</p>
            </div>

            <div className="flex items-center mt-2">
              <svg
                className="h-8 w-8 text-green-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" text-md">Galeri & Video Prewedding</p>
            </div>
            <div className="flex items-center mt-2">
              <svg
                className="h-8 w-8 text-green-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" text-md">Love Story</p>
            </div>
            <div className="flex items-center mt-2">
              <svg
                className="h-8 w-8 text-green-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" text-md">Dan lain-lain</p>
            </div>
          </div>
        </div>
        <div className="p-4 mt-4">
          <div className="  flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center">
              <Image height={80} width={80} src="/images/mudah.png"></Image>
              <h5 className="text-xl font-bold">Mudah</h5>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image
                height={80}
                width={80}
                src="/images/affordable.png"
              ></Image>
              <h5 className="text-xl font-bold">Murah</h5>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image height={80} width={80} src="/images/cepat.png"></Image>
              <h5 className="text-xl font-bold">Cepat</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
