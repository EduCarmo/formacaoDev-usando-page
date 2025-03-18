import BotaoLink from "@/components/BotaoLink";
import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";


export function getStaticPaths() {
    const paths = filmes.map(filme => {
        return { params: { id: filme.id } }
    })
    return { paths, fallback: false }
}



export function getStaticProps({ params }: any) {
    const i = filmes.findIndex(filme => filme.id === params.id)
    return {
        props: {
            filme: filmes[i], // Certifique-se de pegar o filme correto
            numero: i + 1,
            total: filmes.length,
            idAnterior: filmes[i - 1]?.id ?? null,
            proximoId: filmes[i + 1]?.id ?? null
        }
    }
}

export default function PaginaCatalogo(props: any) {

    const { filme, numero, total, idAnterior, proximoId } = props
    if(!filme) return null

    return (
        <Pagina>
            <Filme
                id={filme.id}
                titulo={filme.titulo}
                subtitulo={filme.subtitulo}
                imagem={filme.imagem}
                descricao={filme.descricao}
            />
            <div className="flex gap-5 items-center justify-centerp-5">
                {idAnterior && (
                    <BotaoLink href={`/render/ssg/catalogo/${idAnterior}`}>
                        Anterior
                    </BotaoLink>
                )}

                <div className="flex gap-2 text-xl items-center">
                    <span>{numero}</span>
                    <span className="text-base text-zinc-500">de</span>
                    <span>{total}</span>
                </div>

                {proximoId && (
                    <BotaoLink href={`/render/ssg/catalogo/${proximoId}`}>
                        Próximo
                    </BotaoLink>
                )}
            </div>
        </Pagina>
    )
}