interface PaginaProps {
    children?: React.ReactNode
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="
            flex flex-col min-h-screen justify-center items-center
            bg-gradient-to-r from-zinc-900 to-black
            text-5xl font-black
        ">
            {props.children}
        </div>
    )
}