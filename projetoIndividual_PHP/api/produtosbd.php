<?php
    require ("./conexaobd.php");
          
    $sql = "SELECT * FROM produtos;";
    $resultado = query($sql);

    $produtos = [];        

        while($rows = mysqli_fetch_assoc($resultado)){
            $produtos[]   = $rows;
            }  
    
    header("Access-Control-Allow-Origin:*");
    //var_dump ($produtos);
    echo json_encode($produtos);
?>