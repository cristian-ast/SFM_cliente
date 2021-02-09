import React, { useState, useEffect, Fragment } from 'react';

import clienteAxios from '../config/axios';

const AdsMovil = () => {

    const [baseDatosAnuncios, guardarBaseDatosAnuncios ] = useState([]);
    const [ anuncio, guardarAnuncio ] = useState(false);

    const BuscarLosAnuncios = async () => {

        try {
          const respuesta = await clienteAxios.get('/api/anuncios/');
          guardarBaseDatosAnuncios(respuesta.data);
            
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        BuscarLosAnuncios();
    }, []);

    useEffect(() => {
        let tamaño = baseDatosAnuncios.length;
        let num = (Math.floor((Math.random() * tamaño) + 1)) - 1; 
        guardarAnuncio(baseDatosAnuncios[num]);
    }, [baseDatosAnuncios]);

    return (
        <Fragment>
            {anuncio ? 
                <div className="Ads-movil">
                    <a href={anuncio.url} target="_blank" rel="noreferrer">
                        <img src={anuncio.img} alt="Imagen de AdsMovil" className="ImagenAdsMovil" />
                    </a>
                </div>
            : null}
        </Fragment>
    );
}

export default AdsMovil;