import Pagina from "@/components/Pagina";

interface produto {
    id: number,
    nome: string,
    descricao: string,
    preco: number
}

interface paginaProdutosProps {
    produtos: produto[]
}

export async function getStaticProps() {
    const resposta = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resposta.json()

    return {
        props: {produtos}
    }
}

export default function PaginaProduto(props: paginaProdutosProps) {

    function renderizarProdutos(produto: produto) {
        return (
            <div className="flex gap-2" key={produto.id}>
                <div>{produto.id}</div>
                <div>{produto.nome}</div>
                <div>{produto.preco}</div>
            </div>
        )
    }

    return (
        <Pagina>
            <div className="flex flex-col">
                <div>{props.produtos.map(renderizarProdutos)}</div>
            </div>
        </Pagina>
    )
}