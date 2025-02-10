"use client"
import { House, BookOpen, LibraryBig, Feather, Hand } from 'lucide-react'
import FooterButton from './footerButton'
import { useState } from 'react'

export default function Footer(){
    const [focus, setFocus] = useState("home")
    
    function changeFocus(newValue : string) : void {
        setFocus(newValue)
    }

    return (
        <div className="fixed bottom-0 w-full">
            <div className='relative flex justify-center'>
                <div className="w-full h-20 bg-[#1F1F1F] rounded-t-[50px] flex items-center justify-between px-8">
                    <FooterButton focus={focus} changeFocus={changeFocus} id='home' icon={<House />} url='/'/>
                    <FooterButton focus={focus} changeFocus={changeFocus} id='hadiths' icon={<LibraryBig />} url='/#'/>
                    <FooterButton focus={focus} changeFocus={changeFocus} id='quran' icon={<BookOpen />} url='/quran'/>                    
                    <FooterButton focus={focus} changeFocus={changeFocus} id='dhikr' icon={<Hand />} url='/dhikr'/>
                    <FooterButton focus={focus} changeFocus={changeFocus} id='names' icon={<Feather />} url='/#'/>
                </div>
            </div>
        </div>
    )
}