"use client"
import { RotateCcw } from 'lucide-react'
import { useState } from 'react'

import AdhkarButton from '@/components/dhikr/adhkarButton'
import CounterButton from '@/components/dhikr/counterButton'

interface Counter {
  name: string
  count: number
  target: number
}

export default function Dhikr() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] p-6 pt-12">
      <div className="mb-12">
        <h1 className="text-3xl font-light text-white mb-6">Compteurs</h1>
        <div className="grid gap-4">
          {/* <CounterButton id='' target={}/> */}
          <CounterButton id='سُبْحَانَ ٱللَّٰهِ' target={33}/>
          
          <CounterButton id='ٱلْحَمْدُ لِلَّٰهِ' target={33}/>

          <CounterButton id='ٱللَّٰهُ أَكْبَرُ' target={33}/>
        </div>
      </div>

      {/* Grille des Adhkar */}
      <div>
        <h2 className="text-3xl font-light text-white mb-6">Adhkar quotidiens</h2>
        <div className="grid gap-4 pb-24">
          
          <AdhkarButton id='' colorFrom='from-blue-400/20' colorTo='to-purple-400/20' textTop='Adhkar du matin' textBottom='À réciter après la prière du Fajr'/> 
          
          <AdhkarButton id='' colorFrom='from-orange-400/20' colorTo='to-red-400/20' textTop='Adhkar du soir' textBottom='À réciter après la prière du Asr'/> 
          
          <AdhkarButton id='' colorFrom='from-green-400/20' colorTo='to-teal-400/20' textTop='Après la prière' textBottom='À réciter après chaque prière obligatoire'/> 
        
        </div>
      </div>
    </main>
  )
} 