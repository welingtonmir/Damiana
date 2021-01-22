
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Contatos</title>
    <link rel="stylesheet" href="estilo/style.css" />
  </head>
  <body>
     <!--Menu-->
   <?php
    require_once ("./componentes/menu.html");
   ?>
    <header>
      <h2>Contatos</h2>
    </header>
    <hr />
    <div id="contatos">
      <div>
        <img src="estilo/imagens/iconeZap.png" alt="Ícone WhatsApp" />
        <label>(021)9999-9999</label>
      </div>
      <div>
        <img src="estilo/imagens/iconeEmail.png" alt="Ícone Email" />
        <label>Email: welingtonmiranda20@gmail.com</label>
      </div>   
    </div>
    <br><br>
    <!--Rodapé-->
    <?php
     include_once ("./componentes/rodape.html");
    ?>
  </body>
</html>
