<?php
require_once 'conexaobd.php';

$sql = "SELECT * FROM produtos";
$resultado = mysqli_query($conn, $sql);
while($dados = mysqli_fetch_array($resultado)):
    $id        = $dados['id_produto'];
    $categoria = $dados['categoria']; 
    $descricao = $dados['descricao']; 
    $preco     = $dados['preco']; 
    $pv        = $dados['preco_venda']; 
    $imagem    = $dados['imagem_produto'];
      
endwhile; 


?>

