import Image from "next/image";
export default function Fitur() {
  return (
    <div id="fitur" className="min-h-screen">
      <div className=" flex justify-center ">
        <h3 className="text-2xl font-bold text-gray-800 mr-4">
          Fitur Lengkap
          <hr className="border-2 border-[#967E76] mx-7 mt-1" />
        </h3>
      </div>

      <div className="mt-2 mx-4">
        <div className="shadow-md h-full w-full rounded-2xl bg-white p-4">
          <div className="flex items-center ">
            <svg
              class="h-8 w-8 text-green-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className=" text-xl">Masa aktif 1 tahun</p>
          </div>

          <div className="flex items-center mt-2">
            <svg
              class="h-8 w-8 text-green-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className=" text-xl">Sebar undangan sepuasnya</p>
          </div>

          <div className="flex items-center mt-2">
            <svg
              class="h-8 w-8 text-green-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className=" text-xl">Revisi tanpa batas</p>
          </div>

          <div className="flex items-center mt-2">
            <svg
              class="h-8 w-8 text-green-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className=" text-xl">Custom nama tamu</p>
          </div>

          <div className="flex items-center mt-2">
            <svg
              class="h-8 w-8 text-green-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className=" text-xl">Konfirmasi Kehadiran & Ucapan</p>
          </div>

          <div className="flex items-center mt-2">
            <svg
              class="h-8 w-8 text-green-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className=" text-xl">Bebas custom backsound</p>
          </div>

          <div className="flex items-center mt-2">
            <svg
              class="h-8 w-8 text-green-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className=" text-xl">Amplop Digital & Gift</p>
          </div>

          <div className="flex items-center mt-2">
            <svg
              class="h-8 w-8 text-green-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className=" text-xl">Galeri & Video Prewedding</p>
          </div>
          <div className="flex items-center mt-2">
            <svg
              class="h-8 w-8 text-green-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className=" text-xl">Love Story</p>
          </div>
          <div className="flex items-center mt-2">
            <svg
              class="h-8 w-8 text-green-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className=" text-xl">Dan lain-lain</p>
          </div>
        </div>
        <div className="p-4 mt-4">
            <div className="grid grid-cols-3">
                <div className="flex flex-col justify-center items-center">
                <Image height={80} width={80} src="/images/mudah.png"></Image>
                <h5 className="text-2xl font-bold">Mudah</h5>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                <Image height={80} width={80} src="/images/affordable.png"></Image>
                <h5 className="text-2xl font-bold">Murah</h5>
                </div>


                <div className="flex flex-col justify-center items-center">
                <Image height={80} width={80} src="/images/cepat.png"></Image>
                <h5 className="text-2xl font-bold">Cepat</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
