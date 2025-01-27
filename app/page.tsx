"use client"
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] p-6 pt-12">
      {/* En-tête avec salutation */}
      <div className="mb-12">
        <h1 className="text-5xl font-light text-white mb-2">Salam,</h1>
        <p className="text-gray-400">Bienvenue sur votre compagnon spirituel</p>
      </div>

      {/* Cartes des sections principales */}
      <div className="grid gap-4">
        <button className="w-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 p-6 rounded-3xl backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-white">Dernière lecture</h2>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-gray-400">Sourate Al-Fatiha</p>
          <div className="mt-3 text-sm text-gray-500">
            Verset 3 • Page 1
          </div>
        </button>

        <button className="w-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 p-6 rounded-3xl backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-white">Dhikr du jour</h2>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-gray-400">Subhan Allah</p>
          <div className="mt-3 text-sm text-gray-500">
            33 fois • Matin
          </div>
        </button>

        <button className="w-full bg-gradient-to-br from-pink-400/20 to-orange-400/20 p-6 rounded-3xl backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-white">Hadith du jour</h2>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-gray-400">
            "Les actes ne valent que par leurs intentions..."
          </p>
          <div className="mt-3 text-sm text-gray-500">
            Sahih Al-Bukhari
          </div>
        </button>
      </div>
    </main>
  )
}