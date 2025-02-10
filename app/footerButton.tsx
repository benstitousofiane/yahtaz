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
        <Link href={prop.url} className={`relative z-10 transition-all duration-300 ease-in-out p-3 ${prop.focus == prop.id ? 'text-white': 'text-neutral-700'}`}onClick={() => prop.changeFocus(prop.id)}>
            {prop.icon}
        </Link>
    )
}