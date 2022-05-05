import { Grid } from "./Grid";
import { Header } from "./Header";

export function LayoutPage(){
    return(
        <div>
            <Header />

            <div className="w-full mx-auto mt-10 flex items-center justify-center">
                <div className="w-[80%] bg-zinc-800 p-12 rounded-lg">
                    <p className="text-zinc-400">
                        Experimente enviar um feedback de um <span className="italic">bug</span> na aplicação 🐛
                    </p>
                </div>
            </div>

            <Grid />
        </div>
    )
}