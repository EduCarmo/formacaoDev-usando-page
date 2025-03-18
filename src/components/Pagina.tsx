import Menu from "./Menu"

interface PaginaProps {
    children?: React.ReactNode
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="
            flex flex-col min-h-screen
            bg-gradient-to-r from-zinc-900 to-black
            text-5xl font-black
        ">
            <nav className="
                bg-black p-3
                border border-zinc-700 
            ">
                <Menu />    
            </nav>
            <main className="
                flex flex-1 flex-col justify-center items-center
            ">
                {props.children}
            </main>
        </div>
    )
}