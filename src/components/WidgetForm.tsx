import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg'
import ideiaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'
import { useState } from "react";

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: ideiaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    }
}

type feedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
    const [feedBackType, setFeedbackType] = useState<feedbackType | null>(null)

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header className="text-xl leading-6">
                <span>Deixe o seu feedback</span>

                <CloseButton />
            </header>

            {!feedBackType ? (
                <div className="flex py-8 gap-2 w-full">
                    { Object.entries(feedbackTypes).map(([key, value]) => {
                        return(
                            <button
                                key={key}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                onClick={() => setFeedbackType(key as feedbackType)}
                                type="button"
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        )
                    }) }
                </div>

            ) : (
                <p>Hello World</p>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}