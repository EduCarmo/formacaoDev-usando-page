import Pagina from "@/components/Pagina";


interface personagem {
    name: string,
    birth_year: string
}

interface personagemProps {
    personagem: personagem
}

export async function getStaticProps() {

    const resposta = await fetch('http://swapi.dev/api/people/1')
    const personagem = await resposta.json()

    return {
        props: {personagem}
    }
}

export default function PaginaPersonagem(props: personagemProps) {
    return (
        <Pagina>
            <div>{props.personagem.name}</div>
            <div>{props.personagem.birth_year}</div>
        </Pagina>
    )
}