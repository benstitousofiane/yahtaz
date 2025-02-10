"use client"
import ResumeButton from '@/components/home/resumeButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] p-6 pt-12 pb-24">
      {/* En-tête avec salutation */}
      <div className="mb-12">
        <h1 className="text-5xl font-light text-white mb-2">Salam,</h1>
        <p className="text-gray-400">Bienvenue sur votre compagnon spirituel</p>
      </div>

      {/* Cartes des sections principales */}
      <div className="grid gap-4">
        <ResumeButton id='lastRead' colorFrom='from-blue-400/20' colorTo='to-purple-400/20' textTop='Dernière lecture' textMiddle='Sourate Al-Fatiha'  textBottom='Verset 3 • Page 1' />
        <ResumeButton id='dhikrOfDay' colorFrom='from-purple-400/20' colorTo='to-pink-400/20' textTop='Dhikr du jour' textMiddle='Subhan Allah'  textBottom='33 fois • Matin' />
        <ResumeButton id='hadithOfTheDay' colorFrom='from-pink-400/20' colorTo='to-orange-400/20' textTop='Hadith du jour' textMiddle='"Les actes ne valent que par leurs intentions..."'  textBottom='Sahih Al-Bukhari' />
      </div>
    </main>
  )
}