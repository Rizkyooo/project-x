import { WeddingGift } from "@/components/weddingGift";
import Kehadiran from "@/components/kehadiran";
export default function Gift() {
  return (
    <div id="Gift" className="mt-20 flex flex-col justify-center items-center">
      <h4 className=" mx-4 mb-2 text-3xl text-[#D6CDB5] text-center ">
        Wedding Gift
      </h4>
      <h4 className="mt-2 mb-6 text-xs mx-6 text-[#D6CDB5] text-center">
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika
        memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara
        cashless.
      </h4>
      <WeddingGift></WeddingGift>
      <div data-aos="fade-up" className="flex justify-center items-center mt-20">
        <Kehadiran></Kehadiran>
      </div>
    </div>
  );
}
