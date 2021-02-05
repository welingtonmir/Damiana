export function adicionarNoCarrinho(id_produto, quantidade) {
  type: "adicionarCarrinho", id_produto, quantidade;
}

export function removerDoCarrinho(id_produto, quantidade) {
  type: "removerCarrinho", id_produto, quantidade;
}

export function limparCarrinho(quantidade) {
  type: "limparCarrinho", quantidade;
}
