<?php
    require ("./conexaobd.php");
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
          
    $sql = "SELECT * FROM produtos";
    $resultado = query($sql);

    $produtos = [];        

        while($rows = mysqli_fetch_assoc($resultado)){
            $produtos[]   = $rows;
            }  
    

    //var_dump ($produtos);

    function utf8ize($d) {
        if (is_array($d)) {
            foreach ($d as $k => $v) {
                $d[$k] = utf8ize($v);
            }
        } else if (is_string ($d)) {
            return utf8_encode($d);
        }
        return $d;
    }


      echo json_encode(utf8ize($produtos));
   
?>