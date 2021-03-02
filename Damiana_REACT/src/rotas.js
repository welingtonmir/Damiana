import { Switch, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./views/estilos/App.css";

const Home = lazy(() => import("./views/home.js"));
const Produtos = lazy(() => import("./views/produtos.js"));
const Contatos = lazy(() => import("./views/contatos.js"));
const Lojas = lazy(() => import("./views/lojas.js"));
const Carrinho = lazy(() => import("./views/carrinho.js"));

function Rotas() {
  return (
    <Suspense fallback={<p id="loading">Carregando... </p>}>
      <Switch>
        <Route exact path="/produtos" component={Produtos} />
        <Route exact path="/contatos" component={Contatos} />
        <Route exact path="/" component={Home} />
        <Route exact path="/lojas" component={Lojas} />
        <Route exact path="/carrinho" component={Carrinho} />
      </Switch>
    </Suspense>
  );
}

export default Rotas;
