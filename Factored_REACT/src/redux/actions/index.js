export function adicionarNoCarrinho(id, quantidade) {
  type: "adicionarCarrinho", 
  id, 
  quantidade
};

export function removerDoCarrinho(id_produto, quantidade) {
  type: "removerCarrinho", 
  id, 
  quantidade
};

export function limparCarrinho(quantidade) {
  type: "limparCarrinho", 
  quantidade
};
