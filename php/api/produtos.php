<?php

require_once "../actions/conexao.php";

$result = query("SELECT * FROM produto");
$produtos = [];

while($row = mysqli_fetch_assoc($result)){
    $produtos[] = $row;
}

header("Access-Control-Allow-Origin:*");
echo json_encode($produtos);

?>