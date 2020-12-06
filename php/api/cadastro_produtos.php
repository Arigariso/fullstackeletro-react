<?php 

    require_once '../actions/conexao.php';

    header("Access-Control-Alow-Origin:*");
    header("Content-type: application/json");

   
    
    $arr = array("nome"=>$_POST['nome']);

    echo json_encode($arr);
?>



