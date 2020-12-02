<?php
    require ("../conexaobd.php");
          
    $sql = query("SELECT * FROM produtos");

    $produtos = [];        

    while($rows = mysqli_fetch_assoc($sql)){
    $produtos[]   = $rows;
    }
 
    header("Access-Control-Allow-Origin:*");
    //print_r ($produtos);
    echo json_encode($produtos);
    
?>