"use client"
import { RotateCcw } from 'lucide-react'
import { useState } from 'react'

interface Counter {
  name: string
  count: number
  target: number
}

export default function DhikrPage() {
  const [counters, setCounters] = useState<Counter[]>([
    { name: "SubhanAllah", count: 0, target: 33 },
    { name: "Alhamdulillah", count: 0, target: 33 },
    { name: "Allahu Akbar", count: 0, target: 33 }
  ])

  const updateCount = (index: number) => {
    setCounters(prev => prev.map((counter, i) => {
      if (i === index) {
        const newCount = counter.count + 1
        return { ...counter, count: Math.min(newCount, counter.target) }
      }
      return counter
    }))
  }

  const resetCounter = (index: number) => {
    setCounters(prev => prev.map((counter, i) => 
      i === index ? { ...counter, count: 0 } : counter
    ))
  }

  return (
    <main className="min-h-screen bg-[#1A1A1A] p-6 pt-12">
      <div className="mb-12">
        <h1 className="text-3xl font-light text-white mb-6">Compteurs</h1>
        <div className="grid gap-4">
          {counters.map((counter, index) => (
            <div key={counter.name} className="relative">
              <button 
                onClick={() => updateCount(index)}
                className="w-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 p-6 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-medium text-white">{counter.name}</h2>
                  <span className="text-gray-400">{counter.count}/{counter.target}</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-4xl font-light text-white">{counter.count}</div>
                </div>
              </button>
              {/* Bouton reset en position absolue */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  resetCounter(index);
                }}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Grille des Adhkar */}
      <div>
        <h2 className="text-3xl font-light text-white mb-6">Adhkar quotidiens</h2>
        <div className="grid gap-4">
          <button className="w-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 p-6 rounded-3xl backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all text-left">
            <h3 className="text-xl font-medium text-white mb-2">Adhkar du matin</h3>
            <p className="text-gray-400">À réciter après la prière du Fajr</p>
          </button>

          <button className="w-full bg-gradient-to-br from-orange-400/20 to-red-400/20 p-6 rounded-3xl backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all text-left">
            <h3 className="text-xl font-medium text-white mb-2">Adhkar du soir</h3>
            <p className="text-gray-400">À réciter après la prière du Asr</p>
          </button>

          <button className="w-full bg-gradient-to-br from-green-400/20 to-teal-400/20 p-6 rounded-3xl backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all text-left mb-24">
            <h3 className="text-xl font-medium text-white mb-2">Après la prière</h3>
            <p className="text-gray-400">À réciter après chaque prière obligatoire</p>
          </button>
        </div>
      </div>
    </main>
  )
} 