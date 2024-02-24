import Image from "next/image"
import { CardDesain } from "./card"
export default function TemplateDesain(){
    return(
        <div className="min-h-screen">
            <div className="flex justify-center">
                <h4 className="text-2xl font-bold">Pilih Tema
                <hr className="border-2 border-[#967E76] mx-7 mt-1" />
                </h4>
            </div>

            <div className="mt-4 mx-6">
                <CardDesain></CardDesain>
                <CardDesain></CardDesain>
            </div>
        </div>
    )
}