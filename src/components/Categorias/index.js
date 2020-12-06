import React from 'react';
 
function exibirTodos() {
    let elementos = document.getElementsByClassName('produto');
 
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style = "display: inline-block";
    }
 } 
 
 function exibir(categoria) {
 
    let elementos = document.getElementsByClassName('produto');
    console.log(elementos);
 
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].classList.contains(categoria)) {
                elementos[i].style = "display: inline-block;"
            }
    
            else {
                elementos[i].style = "display: none";
            }
        }
}   

class Categorias extends React.Component {
   render() {
       
       return (
           <div className="col-lg-2 col-md-2 d-sm-inline">
           <h2 className="h2">Categorias</h2>
           <div className="list-group">
               <li className="list-group-item list-group-item-action" onClick={() => exibirTodos()}>Todos(12)</li>
               <li className="list-group-item list-group-item-action" onClick={() => exibir('fogao')}>Fogão(2)</li>
               <li className="list-group-item list-group-item-action" onClick={() => exibir('geladeira')}>Geladeira(3)</li>
               <li className="list-group-item list-group-item-action" onClick={() => exibir('lavalouca')}>Lava louça(2)</li>
               <li className="list-group-item list-group-item-action" onClick={() => exibir('maquinadelavar')}>Máquina de lavar(2)</li>
               <li className="list-group-item list-group-item-action" onClick={() => exibir('microondas')}>Microondas(3)</li>
           </div>
       </div>
       )
   }
}

export default Categorias; 