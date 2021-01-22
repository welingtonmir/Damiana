<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Damiana Biquínis - Produtos</title>
    <link rel="stylesheet" href="estilo/style.css" />
    <script type="application/javascript" src="funcoes.js/funcoes.js"></script>
  </head>
  <body>
     <!--Menu-->
   <?php
    require("./componentes/menu.html");
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
        <div class="box_produtos" id="" style="display:inline-block;">
          <img id="imagem_produto" src="" alt="" onclick="destaque(this)"/>
          <p>                         </p>
          <p class="precoOriginal">   </p>
          <p class="precoVenda">      </p>
          <hr>
        </div>
      </section>
    </main>
    <!--Rodapé-->
    <?php
     include_once("./componentes/rodape.html");
    ?>
  </body>
</html>
