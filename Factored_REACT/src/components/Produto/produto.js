import { Card, Button, Row } from "react-bootstrap";
import "../../views/estilos/produtos/produto.css";
import { useDispatch } from "react-redux";
import imagem from "../../views/estilos/img/foto_nao_disponivel.gif";

export default function Produto(props) {

  const dispatch = useDispatch();
  
  return (
    <Card class="produtos" className={props.categoria} key={props.id_produto}>
      <Card.Img src={imagem} variant="top" alt="Imagem do produto" />
      <Card.Body>
        <Card.Title class="descricao">{props.descricao}</Card.Title>
        <Card.Text class="precoOriginal" >
          R$ {props.preco.toFixed(2).replace(".", ",")}
        </Card.Text>
        <Card.Text className="pdv">
          R$ {props.pdv.toFixed(2).replace(".", ",")}
        </Card.Text>
        <Row>
          <Button
            className="mx-auto"
            variant="success"
            type="button"
            onClick={() =>
              dispatch({ type: "adicionarCarrinho", id: props.id_produto })
            }
          >
            Adicionar ao carrinho
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}
