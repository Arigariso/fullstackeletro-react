import React from 'react';
import rio from '../components/lojas/rio.jpg'
import mg from '../components/lojas/mg.jpg'
import sp from '../components/lojas/sp.jpg'
import '../components/lojas/loja.css'



export default function Lojas () {
    return (

    <div className="caixa">

        <div className="box_loja">

            <div className="card">
                <img src={rio} className="rio"/>                 
                
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Loja Rio de Janeiro</h5>
                        <p className="card-text">Endereço:</p>
                        Avenida Brasil nº 1.000
                        Rio de Janeiro - R.J
                    </div>
                </div>
            </div>

            <div className="card">
                <img src={mg} className="mg"/> 
                
        
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Minas Gerais</h5>
                        <p className="card-text">Endereço:</p>
                        Avenida Paraná nº 2.500
                        Belo Horizonte - M.G
                    </div>
                </div>
            </div>

            <div className="card">
                <img src={sp} className="sp"/> 
                
        
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">São Paulo</h5>
                        <p className="card-text">Endereço:</p>
                        Avenida Paulista nº 3.250
                        São Paulo - S.P
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    )
}                                                     
                        
  
        

                       