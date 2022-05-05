export function Header(){
    return(
        <div className="w-full py-4 bg-zinc-800">
            <div className="w-[80%] flex items-center justify-between m-auto">
                <div className="w-[150px] h-10 bg-zinc-700 rounded-lg">
            </div>

                <div className="flex">
                    <div className="w-[100px] h-4 bg-zinc-700 rounded-lg mx-2"></div>
                    <div className="w-[100px] h-4 bg-zinc-700 rounded-lg mx-2"></div>
                    <div className="w-[100px] h-4 bg-zinc-700 rounded-lg mx-2"></div>
                    <div className="w-[100px] h-4 bg-zinc-700 rounded-lg mx-2"></div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-zinc-700 rounded-lg mx-1"></div>
                    <div className="w-8 h-8 bg-zinc-700 rounded-lg mx-1"></div>
                    <div className="w-10 h-10 bg-zinc-700 rounded-full ml-2"></div>
                </div>
            </div>
        </div>
    )
}