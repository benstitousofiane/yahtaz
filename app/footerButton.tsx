"use clients"
import Link from "next/link"
import { ReactNode } from "react"

interface FooterButtonInterface{
    id : string
    icon: ReactNode
    url: string
    focus : string
    changeFocus : (newValue : string) => void
}

export default function FooterButton(prop : FooterButtonInterface){
    return (
        <Link 
            href={prop.url}
            className={`
                relative z-10 transition-all duration-300 ease-in-out p-3
                ${prop.id === 'home' ? '' : 'hover:text-white/90'}
                ${prop.focus === prop.id && prop.id !== 'quran'
                    ? "text-white" 
                    : prop.id === 'quran' ? "text-[#1F1F1F]" : "text-gray-500"
                }
            `} 
            onClick={() => prop.changeFocus(prop.id)}
        >
            {prop.icon}
        </Link>
    )
}