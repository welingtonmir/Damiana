//método chamando do redux para poder criar a reserva
import { createStore } from "redux";
//chamando para a reserva o conjunto de todos os reducers(carrinho,produto)
import reducers from "../reducers/reducers.js";

//armazenando em uma variável da reserva o método para criação dos reducers. 
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//exportando para o index.js
export default store;
