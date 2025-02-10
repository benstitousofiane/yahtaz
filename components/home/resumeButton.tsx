"useClient"

import { ArrowRight } from 'lucide-react'

interface ResumeButtonInterface{
    id: string
    colorFrom: string
    colorTo: string
    textTop: string
    textMiddle: string
    textBottom: string
}

export default function ResumeButton(prop: ResumeButtonInterface){
    return (
        <button className={`w-full bg-gradient-to-br ${prop.colorFrom} ${prop.colorTo} p-6 rounded-3xl backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-white">{prop.textTop}</h2>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-gray-400">{prop.textMiddle}</p>
          <div className="mt-3 text-sm text-gray-500">
            {prop.textBottom}
          </div>
        </button>
    )
}