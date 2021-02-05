import "../../views/estilos/carrinho/carrinho.css";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import imagem from "../../views/estilos/img/foto_nao_disponivel.gif";

export default function CarrinhoComponente(props) {
  const dispatch = useDispatch();

  return (


    <table>
      <tbody>
        <tr key={props.id_produto}>
          <td width="20%">
            <img
              className="imagemProduto"
              src={imagem}
              alt="Imagem do produto"
            />
          </td>
          <td width="20%" className="nomeProduto">
            {props.descricao}
          </td>
          <td width="20%" className="precoProduto">
            R$ {(props.preco * props.quantidade).toFixed(2).replace(".", ",")}
          </td>
          <td width="20%" className="quantidadeProduto">
            {props.quantidade}
          </td>
          <td width="20%">
            <Button
              type="button"
              className="btn-success mx-2"
              onClick={() =>
                dispatch({ type: "adicionarCarrinho", id: props.id_produto })
              }
            >
              +
            </Button>
            <Button
              type="button"
              className="btn-danger mx-2"
              onClick={() =>
                dispatch({ type: "removerCarrinho", id: props.id_produto })
              }
            >
              -
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
