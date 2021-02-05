//chamando a lista de produtos 
import produtos from "../../produtos.js";

// variável com dados do estado inicial da lista de produtos e criação o campo quantidade
const initialState = produtos.map(item => ({ ...item, quantidade: 0 }));

export default (state = initialState, action) => {
  switch (action.type) {

    case "adicionarCarrinho":
      return state.map((item) => {
        item.id_produto === action.id && item.quantidade++;
        return item;
      });

    case "removerCarrinho":
      return state.map((item) => {
        item.id_produto === action.id && item.quantidade--;
        return item;
      });

    case "limparCarrinho":
      return state.map((item) => {
        item.quantidade = 0;
        return item;
      });

    default:
      return state;
  }
};
