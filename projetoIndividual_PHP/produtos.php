<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Damiana Biquínis - Produtos</title>
    <link rel="stylesheet" href="estilo/style.css" />
    <script type="application/javascript" src="funcoes/funcoes.js"></script>
  </head>
  <body>
    <!--Menu-->
    <?php
      require_once ("./componentes/menu.html");
      require_once ('api/selectprod.php');
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
          <li onclick="exibirCategoria('cinturaAlta')">Biquíni Cintura Alta</li>
          <li onclick="exibirCategoria('fioDental')">Biquíni Fio Dental</li>
          <li onclick="exibirCategoria('cavado')">Biquíni Cavado</li>
          <li onclick="exibirCategoria('cortininha')">Biquíni Cortininha</li>
          <li onclick="exibirCategoria('tomaraQueCaia')">Biquíni Tomara-que-caia</li>
          <li onclick="exibirCategoria('babado')">Biquíni Babado</li>
        </ol>
      </section> 
      <section class="produtos">
        <div class="box_produtos" id="<?php echo $id ?>" style="display:inline-block;">
          <img id="imagem_produto" src="<?php echo $imagem?>" alt="<?php echo $descricao?>" onclick="destaque(this)"/>
          <p><?php echo $descricao ?>    </p>
          <p class="precoOriginal"> <?php echo $preco ?>  </p>
          <p class="precoVenda">  <?php  echo $pv?>    </p>
          <hr>
        </div>
      </section>
    </main>
    <!--Rodapé-->
    <?php
     include_once ("./componentes/rodape.html");
    ?>
  </body>
</html>
