import { useState } from "react";
import html2canvas from "html2canvas";

import { Camera, Trash } from "phosphor-react";
import { Loading } from "./Loading";

interface ScreenshotButtonProps {
    screenshot: string | null
    onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenshotButton({screenshot, onScreenshotTook}: ScreenshotButtonProps){
    const [isTakingScreeshot, setIsTakingScreeshot] = useState(false)

    async function handleTakeScreeshot(){
        setIsTakingScreeshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')
        
        onScreenshotTook(base64image)
        setIsTakingScreeshot(false)
    }

    if(screenshot){
        return(
            <button
                type="button"
                onClick={() => onScreenshotTook(null)}
                className="
                    p-1 w-10 h-10 rounded-md border-transparent flex 
                    justify-end items-end text-zinc-400 hover:text-zinc-100
                "
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 200,
                }}
            >
                <Trash weight="fill" />
            </button>
        )
    }

    return(
        <button
            type="button"
            onClick={handleTakeScreeshot}
            className="
                p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 
                transition-colors  focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-offset-zinc-900 focus:ring-brand-500
            "
        >
            { isTakingScreeshot ? <Loading /> : <Camera className="w-6 h-6" /> }
        </button>
    )
}