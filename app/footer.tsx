"use client"
import { House, BookOpen, LibraryBig, Feather } from 'lucide-react'
import FooterButton from './footerButton'
import { useState } from 'react'

// Navigation tab, works with footerButton.tsx
export default function Footer(){
    const [focus, setFocus] = useState("home")
    
    function changeFocus(newValue : string) : void {
        setFocus(newValue)
    }

    return (
        <div className="absolute bottom-10 w-full">
            <div className='flex justify-center'>
                <div className="bg-neutral-900 flex w-[90%] p-5 rounded-lg justify-between">
                    <FooterButton focus={focus} changeFocus={changeFocus} id='quran' icon={<BookOpen />} url='#'/>
                    <FooterButton focus={focus} changeFocus={changeFocus} id='home' icon={<House />} url='#'/>
                    <FooterButton focus={focus} changeFocus={changeFocus} id='hadiths' icon={<LibraryBig />} url='#'/>
                    <FooterButton focus={focus} changeFocus={changeFocus} id='names' icon={<Feather />} url='#'/>
                </div>
            </div>
        </div>
    )
}