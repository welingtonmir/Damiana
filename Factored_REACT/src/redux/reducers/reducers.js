//herdando método que combina reducers
import { combineReducers } from "redux";
//herdando o reducer de produtos
import produtos from "./produtosReducer";
//herdando o reducer de carrinho
import carrinho from "./carrinhoReducer";

//atribuindo na variável reducers o método de combinação dos redurcers(produto e carrinho)
const reducers = combineReducers({
  produtos,
  carrinho,
});

//enviando para a store
export default reducers;
