import Image from "next/image";
export default function Dalil() {
    return (
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
    );
}