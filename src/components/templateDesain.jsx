import Image from "next/image"
import { CardDesain } from "./card"
export default function TemplateDesain(){
    return(
        <div id="templateDesain" className="min-h-screen mt-20">
            <div className="flex justify-center ">
                <h4 className="text-2xl font-bold md:text-3xl">Pilih Tema
                <hr className="border-2 border-[#967E76] mx-7 mt-1" />
                </h4>
            </div>

            <div className="mt-4 mx-6 grid-cols-2 md:grid md:grid-cols-4 gap-4">
                <CardDesain></CardDesain>
                <CardDesain></CardDesain>
                <CardDesain></CardDesain>
                <CardDesain></CardDesain>
                <CardDesain></CardDesain>

            </div>
        </div>
    )
}