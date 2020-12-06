import { useState, useEffect } from 'react';
import Produto from '../components/produto';
import { Container, Row } from 'react-bootstrap';
import React from 'react';
import Categorias from '../components/Categorias';


export default function Produtos () {
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost/fullstackeletro/php/api/produtos.php");
        const dados = await resposta.json()
        setProdutos(dados);
        
    }, []);

    return (     

        <div className="caixa">

            <div className="lista"> 
                <Categorias />

            </div>  
                
            <div className="box">
                <Row>         
                {produtos && produtos.map(produto => <Produto props={produto}/>)};                     
                </Row> 
            </div>
        </div>               
         
    )
}






    

