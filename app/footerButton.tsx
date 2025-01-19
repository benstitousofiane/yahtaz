"use clients"
import { redirect } from "next/navigation"
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
        <button className={`${prop.focus == prop.id ? "text-white" : "text-neutral-800"} bg-black p-5 rounded-full`} onClick={() => {prop.changeFocus(prop.id); redirect(prop.url)}}>
            {prop.icon}
        </button>
    )
}