import SurahPages from "@/components/quran/surahPages";
export default async function Surah(){
    return(
        <>
            <SurahPages mode="hafs" surahid={2} surahName_ar="..." surahName_phon="...2" />
        </>
    )
}