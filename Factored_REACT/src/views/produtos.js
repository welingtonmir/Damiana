import Produto from "../components/Produto/produto.js";
import "../views/estilos/produtos/produto.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CardColumns, Row, Col, ListGroup } from "react-bootstrap";

export default function Produtos() {
  //Trecho de conexao para acesso a dados com bando MySQL
  /*const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    async function showProdutos() {
      const url = "http://localhost:1910/";
      const resposta = await fetch(url);
      const resultado = await resposta.json();
      setProdutos(resultado);
    }
    showProdutos();
  });
*/
  const produtos = useSelector(state => state.produtos);
  console.log(produtos);

  const [filtro, setFiltro] = useState("");
  console.log(filtro);

  function filtrar(e) {
    setFiltro(e.target.id);
  }

  const mapeamento = produtos.map(item => {
    if (filtro === item.categoria) {
      return (
        <Produto
          categoria={item.categoria}
          id={item.id_produto}
          imagem={item.imagem_produto}
          descricao={item.descricao}
          preco={item.preco}
          pdv={item.preco_venda}
        />
      );
    } else if (filtro === "") {
      return (
        <Produto
          categoria={item.categoria}
          id={item.id_produto}
          imagem={item.imagem_produto}
          descricao={item.descricao}
          preco={item.preco}
          pdv={item.preco_venda}
        />
      )
    }
  })


  return (
    <div className="d-flex">
      <Row>
        <Col class="categorias" sm={2} className="coluna-categorias">
          <h3>Categorias</h3>
          <ListGroup variant="flush" className="categorias">
            <ListGroup.Item action variant="light" id="" onClick={filtrar}>
              Todos
            </ListGroup.Item>
            <ListGroup.Item
              action
              variant="light"
              id="croche"
              onClick={filtrar}
            >
              Biquíni Crochês
            </ListGroup.Item>
            <ListGroup.Item
              action
              variant="light"
              id="cinturaAlta"
              onClick={filtrar}
            >
              Biquíni Cintura Alta
            </ListGroup.Item>
            <ListGroup.Item
              action
              variant="light"
              id="fioDental"
              onClick={filtrar}
            >
              Biquíni Fio Dental
            </ListGroup.Item>
            <ListGroup.Item
              action
              variant="light"
              id="cavado"
              onClick={filtrar}
            >
              Biquíni Cavado
            </ListGroup.Item>
            <ListGroup.Item
              action
              variant="light"
              id="cortininha"
              onClick={filtrar}
            >
              Biquíni Cortininha
            </ListGroup.Item>
            <ListGroup.Item
              action
              variant="light"
              id="tomaraQueCaia"
              onClick={filtrar}
            >
              Biquíni Tomara-que-caia
            </ListGroup.Item>
            <ListGroup.Item
              action
              variant="light"
              id="babado"
              onClick={filtrar}
            >
              Biquíni Babado
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={10} className="coluna-produtos">
          <CardColumns className="text-center">{mapeamento}</CardColumns>
        </Col>
      </Row>
    </div>
  );
}
