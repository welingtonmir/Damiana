import { useState, useEffect } from "react";
import Produto from "../components/Produto/produto.js";
import "bootstrap/dist/css/bootstrap.css";
import "../views/estilos/produtos/produto.css";
import { Card, Button } from "react-bootstrap";
import imagem from "./estilos/img/foto_nao_disponivel.gif";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    async function showProdutos() {
      const url = "http://localhost:1910/";
      const resposta = await fetch(url);
      const resultado = await resposta.json();
      setProdutos(resultado);
    }
    showProdutos();
  });

  return (
    <div className="d-flex">
      <Produto />

      <section className="produtos">
        {produtos &&
          produtos.map(
            ({ id_produto, categoria, descricao, preco, preco_venda }) => (
              <Card className="text-center" style={{ width: "11rem" }}>
                <Card.Img variant="top" src={imagem} alt={categoria} />
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
  );
}
