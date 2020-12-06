<?php


function query($sql) {
    $servidor = "localhost";
    $login = "root";
    $senha = "";
    $bancodados = "fseletro";

    $conn = mysqli_connect($servidor, $login, $senha, $bancodados);
    $resultado = mysqli_query($conn, $sql);
    mysqli_close($conn);
    return $resultado;

    if (!$conn) {
        die("Falha na conexão com o BD " . mysqli_connect_error());
    }
}

function nonquery($sql) {
    $servidor = "localhost";
    $login = "root";
    $senha = "";
    $bancodados = "fseletro";

    $conn = mysqli_connect($servidor, $login, $senha, $bancodados);
    $resultado = mysqli_query($conn, $sql);
    mysqli_close($conn);

    return $resultado;
}


