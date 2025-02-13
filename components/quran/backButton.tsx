"use client"

import { redirect } from "next/navigation"
import { MoveLeft} from "lucide-react"

interface BackButtonInterface{
    mode_ar: string
    mode_phon: string
}

export default function BackButton(prop: BackButtonInterface){
    return(
        <div className="flex items-center gap-2 m-2">
            <button className="text-white bg-neutral-900 p-3 rounded-full" onClick={() => redirect("/quran")}><MoveLeft /></button>
            <p className="text-white text-lg">{prop.mode_ar} ({prop.mode_phon})</p>
        </div>
    )
}