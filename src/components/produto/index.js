 import './produto.css'

export default function Produto({props}) {
        /* destructuring */
    const {categoria, imagem, descricao, preco, precofinal}=props;



    function hide_info(event) {
            const target = event.currentTarget;
            const elemento = target.getElementsByClassName("descricao")[0];
            elemento.style.visibility = "hidden";
    }

    function show_info(event) {
        const target = event.currentTarget;
        const elemento = target.getElementsByClassName("descricao")[0];
        elemento.style.visibility = "initial";
}



    return (

        
        
       <div className={ categoria + " produto col-lg-4 col-mg-3 col-sm-4 col-xs-12 mr-auto p-3"} onMouseOver={show_info} onMouseOut={hide_info}>
                      
           <img src={require(`./imagens/${imagem}`).default} alt="Imagem de Produtos"/>

           <div className="descricao">
               
              <br></br>

               <p className="descritivo">
                   {descricao}
               </p>

               <hr></hr>

               <p className="preco-antes">
                   R$ {preco}
               </p>
               <p className="preco-final">
                   R$ {precofinal}
               </p>  
               <button type="button"  className="btn btn-outline-success" id="botao">
                   <a href="http://localhost:3000/pedidos">Comprar</a></button>   
           </div>           
       </div>
       
            
    )
}

