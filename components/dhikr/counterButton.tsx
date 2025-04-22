"use client"

import { RotateCcw } from 'lucide-react'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false
})

interface CounterButtonInterface{
    id: string
    target: number
}

export default function CounterButton(prop: CounterButtonInterface){
    const [counter, setCounter] = useState(0)
    const [showConfetti, setShowConfetti] = useState(false)
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0
    })
    
    useEffect(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }, [])

    function increaseCounter(){
        if (counter < prop.target){
            setCounter(counter + 1)
            if (counter + 1 === prop.target) {
              setShowConfetti(true)
              setTimeout(() => setShowConfetti(false), 5000)
            }
        }
    }

    function resetCounter(){
        setCounter(0)
        setShowConfetti(false)
    }

    return (
        <div key={prop.id} className="relative">
              {showConfetti && (
                <Confetti
                  width={windowSize.width}
                  height={windowSize.height}
                  recycle={false}
                  numberOfPieces={200}
                />
              )}
              <button 
                onClick={() => increaseCounter()}
                className={`w-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 p-6 rounded-3xl backdrop-blur-sm border transition-all ${
                  counter === prop.target 
                    ? 'border-green-500/50 hover:border-green-500/70' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex flex-row-reverse justify-between items-center mb-4">
                  <h2 className="text-2xl font-serif font-bold text-white">{prop.id}</h2>
                  <span className={`${counter === prop.target ? 'text-green-500' : 'text-gray-400'}`}>
                    {counter}/{prop.target}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <div className={`text-4xl font-light transition-all ${
                    counter === prop.target ? 'text-green-500' : 'text-white'
                  }`}>
                    {counter}
                  </div>
                </div>
              </button>
              {/* Bouton reset en position absolue */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  resetCounter();
                }}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
    )
}