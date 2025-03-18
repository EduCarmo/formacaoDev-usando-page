import Pagina from "@/components/Pagina";
import React from "react";

interface produtos {
    id: number,
    nome: string,
    preco: number
}

interface paginaSSRProps {
    produtos: produtos[],
    data: string
}

export async function getServerSideProps()  {
    const resposta = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resposta.json()
    const data = new Date().toLocaleDateString('pt-BR')

    return ({props: {produtos, data}})
}

export default function PaginaSSR({produtos, data}: paginaSSRProps) {
    return (
        <Pagina>
            <h1>Renderização no Servidor (SSR)</h1>
            <h2>Gerado em: {data}</h2>
            <ul>
                {produtos.map((produto) => {
                    return (
                        <li key={produto.id}>
                            {produto.id} - {produto.nome} - {produto.preco}
                        </li>
                    )
                })}
            </ul>
        </Pagina>
    )
}