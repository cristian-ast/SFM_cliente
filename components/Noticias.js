import React, { Fragment, useState } from 'react';
import Noticia from './Noticia';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
//import AdsMovil from './AdsMovil';

const Noticias = ({BaseDatos, tipo}) => {

    const noticias = BaseDatos; 

    // const multiploDe3 = (n) => {
    //     var resto = n % 3;

    //     if(resto === 0) return true;
        
    //     else return false;
    // }

    // let contador = 0;

    // const MostarAnuncios = () => {
    //     contador++
    //     if (multiploDe3(contador)) {
    //         return (
    //             <AdsMovil />
    //         );
    //     } else {
    //         return null;
    //     }
    // }

    return (
        <div className="contenedor--noticias">
            <div className="contenedorNoticias--titulo">
                <h3><DoubleArrowIcon/>
                    <span className="contenedorNoticias--titulo2">
                        {tipo}
                    </span>
                </h3>
            </div>
                {noticias ? (
                    <Fragment>
                        {noticias.map((noticia) => (
                            <Fragment key = {noticia._id} >
                                <Noticia
                                    titulo = {noticia.titulo}
                                    img = {noticia.img} 
                                    url = {noticia._id}
                                />
                                {/* {MostarAnuncios()} */}
                            </Fragment>
                        ))}
                    </Fragment>
                ) : (
                    <Fragment>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h3>No se han podido cargar las noticias</h3>
                    </Fragment>
                )}
                
        </div>
    );
}

export default Noticias;