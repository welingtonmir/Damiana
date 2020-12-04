import { useState, useEffect} from 'react';
import Categoria from '../componente/Produto/categoria.js';
import 'bootstrap/dist/css/bootstrap.css'
import '../componente/Produto/produto.css'
import {Card, CardDeck, Button} from 'react-bootstrap';

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
                    {produtos && produtos.map( ({ id_produto, categoria, descricao, preco, preco_venda,}) => (<Card className="text-center" style={{width: '11rem'}}>
                        <Card.Img variant="top" src={require(`../componente/Produto/img/foto_nao_disponivel.gif`).default} alt={categoria} />
                        <Card.Body>
                            <Card.Title>{categoria}</Card.Title>
                            <Card.Text>
                                <p>{descricao}</p>
                                <p className="precoOriginal">R$ {preco}</p>
                                <p className="newPrice">R$ {preco_venda}</p>
                            </Card.Text>
                            <Button variant="success">Comprar</Button>
                        </Card.Body>
                    </Card>
                    )
                    )}
                    </section>
                    
                    
                    
                    
                </div>
                 
    )
}