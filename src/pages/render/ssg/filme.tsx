import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";

interface filme {
    id: string,
    titulo: string,
    subtitulo: string,
    imagem: string,
    descricao: string
}

interface PaginaFilmesProps {
    date: string
    filme: filme
}

export function getStaticProps() {
    return {
        props: {
            filme: filmes[0],
            date: new Date().toLocaleDateString('pt-BR')
        }
    }
}

export default function PaginaFilme(props: PaginaFilmesProps) {
    return (
        <Pagina>
            <h1 className="text-4xl p-2">Página Filmes</h1>
            <h2 className="text-2xl">
                Hora de geração: {props.date}
            </h2>
            <Filme 
                id={props.filme.id}
                titulo={props.filme.titulo}
                subtitulo={props.filme.subtitulo}
                imagem={props.filme.imagem}
                descricao={props.filme.descricao}
            />
        </Pagina>
    )
}