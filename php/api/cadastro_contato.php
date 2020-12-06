<?php

require_once '../actions/conexao.php';

if (isset($_POST['nome']) && isset($_POST['msg'])) {
    $nome = $_POST['nome'];
    $msg = $_POST['msg'];

    $sql = "insert into comentarios (nome, msg) values ('$nome', '$msg')";
    $result = $conn->query($sql);

    header("Access-Control-Alow-Origin:*");
    header("Content-type: application/json");
    
    echo json_encode($result);
}

?>

