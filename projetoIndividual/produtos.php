<?php
require ("conexaobd.php");
?>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Damiana Biquínis - Produtos</title>
    <link rel="stylesheet" href="./estilo.css/style.css" />
    <script type="application/javascript" src="funcoes.js/funcoes.js"></script>
  </head>
  <body>
     <!--Menu-->
   <?php
    require('menu.html');
   ?>

    <header>
      <h2>Biquínis</h2>
    </header>
    <hr />
    <main>
      <section class="categorias">
        <h3>Categorias</h3>
        
        <ol>
          <li onclick="exibirTodos()">Todos</li>
          <li onclick="exibirCategoria('croche')">Biquíni Crochê</li>
          <li onclick="exibirCategoria('cinturaAlta')">
            Biquíni Cintura Alta
          </li>
          <li onclick="exibirCategoria('fioDental')">Biquíni Fio Dental</li>
          <li onclick="exibirCategoria('cavado')">Biquíni Cavado</li>
          <li onclick="exibirCategoria('cortininha')">Biquíni Cortininha</li>
          <li onclick="exibirCategoria('tomaraQueCaia')">Biquíni Tomara-que-caia</li>
          <li onclick="exibirCategoria('babado')">Biquíni Babado</li>
        </ol>
        
      </section> 
      <section class="produtos">

        <?php
          $sql ="select*from produtos";
          $result = $conn->query($sql);
        
          if($result->num_rows > 0){

          while($rows = $result->fetch_assoc())   {
            $categoria   = $rows['categoria'];
            $imagem      = $rows['imagem_produto'];
            $descricao   = $rows['descricao'];
            $preco       = $rows['preco'];
            $preco_venda = $rows['preco_venda'];
 
        ?>
      
        <div class="box_produtos" id="<?php echo $categoria?>" style="display:inline-block;">
          <img id="imagem_produto" src="<?php echo $imagem ?>" alt="<?php echo $descricao   ?>" onclick="destaque(this)"/>
          
          
          
          <p>                         <?php echo $descricao   ?>   </p>
          <p class="precoOriginal">   <?php echo "De: R$".$preco       ?>   </p>
          <p class="precoVenda">      <?php echo "Por: R$".$preco_venda ?>   </p>
          <hr>
        </div>

        <?php
          }
            } else{
              echo "Nenhum Produto Cadastrado!";
            }
        ?>

      </section>
    </main>
    <!--Rodapé-->
    <?php
    include_once("rodape.html");
    ?>
  </body>
</html>
