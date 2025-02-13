"use client"

import {ChevronsRight,ChevronsLeft } from "lucide-react"
import { useState } from "react"
import chapters_fr from "./chapters_fr.json"
import chapters_ar from "./chapters_ar.json"


interface ChapterFromJSON{
    revelationPlace: string
    transliteratedName: string
    versesCount: number
    translatedName: string
    slug: string
}

interface ChaptersFromJSON{
    [key : string]: ChapterFromJSON
}

const chapters_ar_usable : ChaptersFromJSON = chapters_ar
const chapters_fr_usable : ChaptersFromJSON = chapters_fr


interface CharptersInterface{
    fromMode: string
    rangeColor : string
    buttonColor : string
}

export default function Chapters(prop: CharptersInterface){
    
    const [chapter, setChapter] = useState("1")

    return (
        <div className="bg-neutral-900 p-6 mt-6 flex flex-col rounded-3xl items-center h-[65%]">
            <p className="text-white text-2xl pb-6">{chapters_ar_usable[chapter].transliteratedName}</p>
            <p className="text-white text-2xl">{chapters_fr_usable[chapter].transliteratedName}</p>
            <p className="text-neutral-600 text-xl pb-6">{chapters_fr_usable[chapter].translatedName}</p>
            
            <div className="flex gap-5 justify-between">    
                <button className={`${Number(chapter) != 114 ? "text-white" : "text-neutral-600"} bg-neutral-800 pt-12 pb-12 p-4 rounded-full`} onClick={() => {Number(chapter) != 114 ? setChapter((Number(chapter) + 1).toString()) : null}}><ChevronsLeft className="w-8 h-8"/></button>
                <p className="text-white text-6xl p-6 mt-4">{chapter}</p>
                <button className={`${Number(chapter) != 1 ? "text-white" : "text-neutral-600"} bg-neutral-800 pt-12 pb-12 p-4 rounded-full`} onClick={() => {Number(chapter) != 1 ? setChapter((Number(chapter) - 1).toString()) : null}}><ChevronsRight className="w-8 h-8"/></button>
            </div>
            
            <input className={`${prop.rangeColor} m-6 w-44`} dir="rtl" type="range" value={chapter} step={1} min={1} max={114} onChange={(e) => setChapter(e.target.value.toString())}/>
            <button className={`${prop.buttonColor} rounded-2xl p-6 pl-12 pr-12 text-left`}>
                <p className="text-white text text-2xl">Lire</p>
            </button>
        
        </div>
    )
}