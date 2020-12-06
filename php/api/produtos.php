<?php

require_once "../actions/conexao.php";

$result = query("SELECT p.idproduto, c.categoria, p.descricao, p.preco, p.precofinal, p.imagem
FROM categoria as c
inner join produto as p
on p.idproduto = c.produto");

$produtos = [];

while($row = mysqli_fetch_assoc($result)){
    $produtos[] = $row;
}

header("Access-Control-Allow-Origin:*");
echo json_encode($produtos);

?>
