import Chapters from "@/components/quran/chapters"
import BackButton from "@/components/quran/backButton"

export default async function Mode({params} : {params : Promise<{mode: string}>}){
    const { mode } = await params
    
    let mode_ar : string = ""
    let mode_phon : string = ""
    let buttonColor : string = ""
    let rangeColor : string = ""
    
    if (mode == "hafs"){
        mode_ar = "حفص"
        mode_phon = "HAFS"
        rangeColor = "accent-cyan-600"
        buttonColor = "bg-cyan-600"
    }
    if (mode == "warsh"){
        mode_ar = "ورش"
        mode_phon = "WARSH"
        rangeColor = "accent-red-600"
        buttonColor = "bg-red-600"
    }
    if (mode == "shubah"){
        mode_ar = "شعبة"
        mode_phon = "SHUBAH"
        rangeColor = "accent-yellow-600"
        buttonColor = "bg-yellow-600"
    }
    if (mode == "qaloun"){
        mode_ar = "قالون"
        mode_phon = "QALOUN"
        rangeColor = "accent-purple-600"
        buttonColor = "bg-purple-600"
    }
    if (mode == "duri"){
        mode_ar = "الدوري"
        mode_phon = "DURI"
        rangeColor = "accent-blue-600"
        buttonColor = "bg-blue-600"
    }
    if (mode == "susi"){
        mode_ar = "السوسي"
        mode_phon = "SUSI"
        rangeColor = "accent-green-600"
        buttonColor = "bg-green-600"
    }

    return (
        <main className="bg-[#1F1F1F] w-full h-screen flex flex-col">
            <BackButton mode_ar={mode_ar} mode_phon={mode_phon}/>

            <Chapters fromMode={mode} rangeColor={rangeColor} buttonColor={buttonColor}/>
        </main>
    )
}