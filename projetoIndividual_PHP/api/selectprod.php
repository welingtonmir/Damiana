<?php
require_once 'conexaobd.php';

$sql = "SELECT * FROM produtos";
$resultado = $conn->query($sql);

if($resultado->num_rows > 0){
    while($rows = $resultado->fetch_assoc()){
        $categoria = $rows['categoria'];
        $imagem    = $rows['imagem_produto'];
        $descricao = $rows['descricao'];
        $preco     = $rows["preco"];
        $pv        = $rows["preco_venda"];
    }
}else{
    echo "Não buscou no banco!";
}



/*$sql = "SELECT * FROM produtos";
$resultado = mysqli_query($conn, $sql);
while($dados = mysqli_fetch_array($resultado)):
    $id        = $dados['id_produto'];
    $categoria = $dados['categoria']; 
    $descricao = $dados['descricao']; 
    $preco     = $dados['preco']; 
    $pv        = $dados['preco_venda']; 
    $imagem    = $dados['imagem_produto'];
      
endwhile; 

*/
?>

