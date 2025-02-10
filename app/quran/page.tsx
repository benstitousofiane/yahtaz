import RecitationModeButton from "@/components/quran/recitationModeButton"

export default function Quran(){
    return (
        <main className="bg-[rgb(26,26,26)] w-full pt-5 pb-24">        
            <p className="text-white text-3xl m-5">Modes de récitation</p>
            <div className="flex flex-col items-center gap-5">
                <RecitationModeButton id="hafs" nameAr="حفص" nameFr="HAFS" nombrePage={604} rgbaFrom="rgba(46, 182, 206, 0.7)" rgbaTo=" rgba(27, 94, 106, 1)"/>
                <RecitationModeButton id="warsh" nameAr="ورش" nameFr="WARSH" nombrePage={604} rgbaFrom="rgba(238, 47, 47, 0.7)" rgbaTo="rgba(106, 27, 27, 1)"/>
                <RecitationModeButton id="shubah" nameAr="شعبة" nameFr="SHUBAH" nombrePage={604} rgbaFrom="rgba(240, 221, 43, 0.7)" rgbaTo="rgba(204, 185, 0, 1)"/>
                <RecitationModeButton id="qaloun" nameAr="قالون" nameFr="QALOUN" nombrePage={604} rgbaFrom="rgba(187, 47, 238, 0.7)" rgbaTo="rgba(57, 20, 70, 1)"/>
                <RecitationModeButton id="duri" nameAr="الدوري" nameFr="DURI" nombrePage={604} rgbaFrom="rgba(78, 115, 255, 0.7)" rgbaTo="rgba(25, 37, 83, 1)"/>
                <RecitationModeButton id="susi" nameAr="السوسي" nameFr="SUSI" nombrePage={604} rgbaFrom="rgba(90, 236, 65, 0.7)" rgbaTo="rgba(40, 110, 29, 1)"/>
            </div>
        </main>
    )
}
