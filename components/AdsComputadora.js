import React, { useState, useEffect } from 'react';
import Ads from './Ads';
import clienteAxios from '../config/axios';

const AdsComputadora = () => {

    let num1, num2, num3;

    const [ BaseDatos, guardarBaseDatos] = useState(false);

    const [ anuncio1, guardarAnuncio1 ] = useState(false);
    const [ anuncio2, guardarAnuncio2 ] = useState(false);
    const [ anuncio3, guardarAnuncio3 ] = useState(false);

    const BuscarLosAnuncios = async () => {

        try {
          const respuesta = await clienteAxios.get('/api/anuncios/');
          guardarBaseDatos(respuesta.data);
            
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        BuscarLosAnuncios();
    }, []);

    useEffect(() => {
        let tamaño = 0;

        if(BaseDatos) {
            tamaño = BaseDatos.length
        
            num1 = (Math.floor((Math.random() * tamaño) + 1)) - 1; 
            guardarAnuncio1(BaseDatos[num1]);
        
        
            do {
                num2 = (Math.floor((Math.random() * tamaño) + 1)) - 1; 
                guardarAnuncio2(BaseDatos[num2]);
            } while ( num1 === num2);
        
            do {
                num3 = (Math.floor((Math.random() * tamaño) + 1)) - 1; 
                guardarAnuncio3(BaseDatos[num3]);
            } while (num2 === num3 || num1 === num3);
        }
      
    }, [BaseDatos]);
    
    return (
        <div className="Asd-computadora">
            <p className="Asd-computadora--p">Publicidad</p>
                
                {anuncio1 ? 
                    <Ads
                        titulo = {anuncio1.titulo}
                        img = {anuncio1.img} 
                        url = {anuncio1.url}
                        key = {anuncio1.titulo}
                    />
                : null}
                {anuncio2 ? 
                        <Ads
                            titulo = {anuncio2.titulo}
                            img = {anuncio2.img} 
                            url = {anuncio2.url}
                            key = {anuncio2.titulo}
                        />
                : null}
                {anuncio3 ? 
                        <Ads
                            titulo = {anuncio3.titulo}
                            img = {anuncio3.img} 
                            url = {anuncio3.url}
                            key = {anuncio3.titulo}
                        />
                : null}
        </div>
    );
}

export default AdsComputadora;