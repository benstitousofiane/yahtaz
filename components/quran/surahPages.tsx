"use client"

import { ReactNode } from 'react'
import quran_hafs from './hafs/hafsData_v2-0.json'
import quran_warsh from './warsh/warshData_v2-1.json'
import quran_shubah from './shubah/shubaData_v2-0.json'
import quran_qaloun from './qaloun/QalounData_v2-1.json'
import quran_duri from './duri/DouriData_v2-0.json'
import quran_susi from './susi/SousiData_v2-0.json'

interface SurahPagesInterface{
    mode : string
    surahid : number
    surahName_ar : string
    surahName_phon : string
}

export default function SurahPages(prop: SurahPagesInterface){
    let quranModeSelected_text = quran_hafs
    let quranModeSelected_font = "Hafs"
    let surahOutput : ReactNode[] = []
    let i : number = 0
    for (const verse of quranModeSelected_text){
        // a ne pas oublier de remettre à un bon état et faire un composant page
        if (verse.sura_no == prop.surahid && verse.page == 6){
            for (const word of verse.aya_text.split(" ")){
                surahOutput.push(<p className='leading-[2rem] m-[1px]' key={i}>{word}</p>)
                i++
            }
        }
    }

    return (
        <main className='bg-neutral-950 flex justify-center text-2xl mb-24' style={{fontFamily: quranModeSelected_font}}>
            <div className='bg-neutral-900 max-w-[95%] m-1 p-4 rounded-3xl'>
                <div className='text-white flex flex-row-reverse flex-wrap justify-around'>
                    {surahOutput}
                </div>
            </div>
        </main>
    )
}
