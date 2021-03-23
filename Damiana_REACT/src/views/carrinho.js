import React from "react";
import CarrinhoComponente from '../components/carrinho/carrinho.js';
import {Container, Table, Button, Row, Col} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux';
import './estilos/carrinho/carrinho.css';
import imagem from './estilos/img/foto_nao_disponivel.gif';


export default function Carrinho()  {
    const carrinho = useSelector(status => status.carrinho.filter(item => {
        return item.quantidade > 0
    }));
    console.log(carrinho)


    const mapeamento = carrinho.map(item => {
        return <CarrinhoComponente id={item.id_produto} imagem={imagem} descricao={item.descricao} 
        preco={item.preco} quantidade={item.quantidade}/> 
    });

    const valorTotal = useSelector(state => 
        state.carrinho.reduce((acc,cur) =>{
           return acc + (cur.preco* cur.quantidade);
    }, 0));

    const dispatch = useDispatch();

    return (
        <Container>
            <h3 className="my-5">Carrinho de Compras</h3>
            <Table className="text-left">
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {mapeamento} 
                </tbody>
            </Table>
            <Container className="text-right my-5">
                <h4 >Valor total da compra: R$ {valorTotal.toFixed(2).replace('.',',')}. </h4>
                <Row className="mt-3">
                    <Col className="mr-auto">
                        <Button type="button" variant="warning" className="mx-1"
                            onClick={() => dispatch({type:"limparCarrinho"})}
                        >Limpar carrinho</Button>
                        <Button type="submit" variant="primary" className="mx-1">Finalizar compra</Button>
                    </Col>
                    
                </Row>
            </Container>

        </Container>
    );
}