import React, { useContext } from 'react';
import { AnunciosContext } from '../context/AnunciosContext';
import Ads from './Ads';

const AdsComputadora = () => {

    var num1, num2, num3, anuncio1, anuncio2, anuncio3;

    const { baseDatosAnuncios } = useContext(AnunciosContext);
    var tamaño = baseDatosAnuncios.anuncios.length;

    num1 = (Math.floor((Math.random() * tamaño) + 1)) - 1; 
    anuncio1 = baseDatosAnuncios.anuncios[num1];

    do {

        num2 = (Math.floor((Math.random() * tamaño) + 1)) - 1; 
        anuncio2 = baseDatosAnuncios.anuncios[num2];

    } while ( num1 === num2);

    do {

        num3 = (Math.floor((Math.random() * tamaño) + 1)) - 1; 
        anuncio3 = baseDatosAnuncios.anuncios[num3];

    } while (num2 === num3 || num1 === num3);
    

    return (
        <div className="Asd-computadora">
            <p className="Asd-computadora--p">Publicidad</p>
                <Ads
                    titulo = {anuncio1.titulo}
                    img = {anuncio1.img} 
                    url = {anuncio1.url}
                    key = {anuncio1.titulo}
                />
                <Ads
                    titulo = {anuncio2.titulo}
                    img = {anuncio2.img} 
                    url = {anuncio2.url}
                    key = {anuncio2.titulo}
                />
                <Ads
                    titulo = {anuncio3.titulo}
                    img = {anuncio3.img} 
                    url = {anuncio3.url}
                    key = {anuncio3.titulo}
                />
        </div>
    );
}

export default AdsComputadora;