import React, { useContext } from 'react';
import { AnunciosContext } from '../context/AnunciosContext';

const AdsMovil = () => {

    const { baseDatosAnuncios } = useContext(AnunciosContext);
    var tamaño = baseDatosAnuncios.anuncios.length;
    var num = (Math.floor((Math.random() * tamaño) + 1)) - 1; 
    var anuncio = baseDatosAnuncios.anuncios[num];

    return (
        <div className="Ads-movil">
            <a href={anuncio.url} target="_blank" rel="noreferrer">
                <img src={anuncio.img} alt="Imagen de AdsMovil" className="ImagenAdsMovil" />
            </a>
        </div>
    );
}

export default AdsMovil;