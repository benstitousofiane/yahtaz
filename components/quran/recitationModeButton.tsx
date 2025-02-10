import Image from "next/image"

import quranImage from "@/public/img/quran.jpg"

interface RecitationModeButtonInterface{
    id: string
    nameAr: string
    nameFr: string
    nombrePage: number
    rgbaFrom: string
    rgbaTo: string
}

export default function RecitationModeButton(prop: RecitationModeButtonInterface){
    return (
        <button className="border border-white/10 w-[300px] h-[150px] rounded-3xl"
        style={{backgroundImage: `linear-gradient(${prop.rgbaFrom}, ${prop.rgbaTo}), url('/img/quran.jpg')`, backgroundSize: "cover"}}>
            <p className="text-white text-3xl mb-1">{prop.nameAr} ({prop.nameFr})</p>
            <p className="text-white">Nombre de page : {prop.nombrePage}</p>
        </button>
    )
}