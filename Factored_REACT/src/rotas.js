import { Switch, Route } from "react-router-dom";
import Produtos from "./views/produtos";
import Contatos from "./views/contatos";
import Home from "./views/home";
import Lojas from "./views/lojas";

function Rotas() {
  return (
    <Switch>
      <Route exact path="/produtos" component={Produtos} />
      <Route exact path="/contatos" component={Contatos} />
      <Route exact path="/" component={Home} />
      <Route exact path="/lojas" component={Lojas} />
    </Switch>
  );
}

export default Rotas;
