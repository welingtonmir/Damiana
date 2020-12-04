import { useState, useEffect} from 'react';
import Categoria from '../componente/Produto/categoria.js';
import 'bootstrap/dist/css/bootstrap.css'
import '../componente/Produto/produto.css'

export default function Produtos(){
    const [ produtos, setProdutos] = useState([]);
    useEffect(() => {
        async function showProdutos() {
            const url = "http://localhost/Damiana/projetoIndividual_PHP/api/produtosbd.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setProdutos(resultado);
        }
        showProdutos();
    });

    return(
                <div className="d-flex">
                <Categoria />
                        <section className="produtos">
                            {produtos && produtos.map( ({ id_produto, categoria, descricao, preco, preco_venda, imagem_produto }) => (
                            <div key={id_produto} >
                                <img id="imagem_produto" src={require(`../componente/Produto/img/foto_nao_disponivel.gif`).default} alt={categoria}/>
                                <h3>{descricao}</h3>
                                <p className="precoOriginal">R$ {preco}</p>
                                <p className="newPrice">R$ {preco_venda}</p>
                            </div>
                                )
                            )}
                        </section>
                        <hr/>
                </div>
                 
    )
}