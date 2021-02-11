import React, { useState, useEffect, Fragment } from 'react';
import AdsN from './AdsN';
import clienteAxios from '../config/axios';

const AdsNew = () => {

    const [ BaseDatos, guardarBaseDatos] = useState(false);

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

    return (
        <div className="Asd-New">
            <center><p className="Asd-New--p">Publicidad</p></center>
                {BaseDatos ?
                    <Fragment>
                        {BaseDatos.map((anuncio) => (
                            <Fragment key = {anuncio._id}>
                                <AdsN
                                    titulo = {anuncio.titulo}
                                    img = {anuncio.img} 
                                    url = {anuncio.url}
                                />
                                <br/><br/>
                            </Fragment>
                        ))}
                    </Fragment>
                : null}    
        </div>
    );
}

export default AdsNew;