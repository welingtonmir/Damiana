import { Switch, Route } from "react-router-dom";
import Produtos from "./views/produtos.js";
import Contatos from "./views/contatos.js";
import Home from "./views/home.js";
import Lojas from "./views/lojas.js";
import Carrinho from './views/carrinho.js';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/produtos" component={Produtos} />
      <Route exact path="/contatos" component={Contatos} />
      <Route exact path="/" component={Home} />
      <Route exact path="/lojas" component={Lojas} />
      <Route exact path="/carrinho" component={Carrinho} />
    </Switch>
  );
}

export default Rotas;
