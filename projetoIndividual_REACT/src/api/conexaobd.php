<?php
function query($sql){
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $database   = "damiana";

    $conn = mysqli_connect($servername, $username, $password, $database);
    if (!$conn)
        die ("Falha na conexão com o BD " . mysqli_connect_error());
    
    
    $result = mysqli_query($conn, $sql);
    mysqli_close($conn);
    return $result;
}

function noquery($sql){
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $database   = "damiana";

    $conn = mysqli_connect($servername, $username, $password, $database);
    if (!$conn)
    die ("Falha na conexão com o BD " . mysqli_connect_error());
    $result = mysqli_query($conn, $sql);
    mysqli_close($conn);
}


?>