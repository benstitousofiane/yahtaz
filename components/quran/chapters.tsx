import { main } from "framer-motion/client"

interface CharptersInterface{}

export default function Chapters(){
    return (
        <main className="bg-[#1F1F1F] w-full min-h-screen">
            <button>retour</button> <input type="text"  placeholder="page slider"/> <button>tafsir</button>
            <p className="text-white text-lg p-5">MODE_AR (MODE_FR)</p>
            <div className="flex flex-col items-center">
                <button className="bg-neutral-900 rounded-2xl p-6 w-[95%] text-left">
                    <p className="text-white text-lg mb-3"><span className="bg-cyan-600 pl-4 pr-4 pt-2 pb-2 mr-2 rounded">NUM</span> NAME_AR (NAME_PHON)</p>
                    <p className="text-neutral-600">Name_FR</p>
                </button>
            </div>
        </main>
    )
}