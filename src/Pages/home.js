import React from 'react';
import banner_home from '../components/produto/imagens/banner_home.jpg'
import '../components/home.css'

export default function Home () {
    return (

        <div className="container-fluid">
            <div className='banner'>        
            <img src={banner_home} className="banner_home"/> 
            </div>
      </div>
         
                 
        
    )
}

