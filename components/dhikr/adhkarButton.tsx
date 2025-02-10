"use client"

interface AdhkarButtonInterface{
    id: string
    colorFrom: string
    colorTo: string
    textTop: string
    textBottom: string
}

export default function AdhkarButton(prop: AdhkarButtonInterface){
    return (
        <button className={`w-full bg-gradient-to-br ${prop.colorFrom} ${prop.colorTo} p-6 rounded-3xl backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all text-left`}>
        <h3 className="text-xl font-medium text-white mb-2">{prop.textTop}</h3>
        <p className="text-gray-400">{prop.textBottom}</p>
        </button>
    )
}