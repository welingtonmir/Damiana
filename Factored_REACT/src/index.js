//herdando react
import React from "react";
//herdando arvore dom
import ReactDOM from "react-dom";
//herdando app
import App from "./App";
//herdando boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store/store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
