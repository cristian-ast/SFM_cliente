import React, { Fragment, useContext} from 'react';
import { BaseDatosContext } from '../context/BaseDatosContext';

//import Noticia from './Noticia';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

//import AdsMovil from './AdsMovil';

const Noticias = ({tipo}) => {

    const { baseDatos } = useContext(BaseDatosContext);

    const multiploDe3 = (n) => {
        var resto = n % 3;

        if(resto === 0) return true;
        
        else return false;
    }

    let contador = 0;

    const MostarAnuncios = () => {
        contador++
        // if (multiploDe3(contador)) {
        //     return (
        //         <AdsMovil />
        //     );
        // } else {
        //     return null;
        // }
    }

    return (
        <div className="contenedor--noticias">
            <div className="contenedorNoticias--titulo">
                <h3><DoubleArrowIcon/><span className="contenedorNoticias--titulo2">{tipo}</span></h3>
            </div>
            { tipo === "Inicio" ? 
                <Fragment>
                    {baseDatos.noticias.map((noticia) => (
                        <Fragment>
                            {/* <Noticia
                                titulo = {noticia.titulo}
                                img = {noticia.img} 
                                url = {noticia.url}
                                key = {noticia.url}
                            /> */}
                            {/* {MostarAnuncios()} */}
                        </Fragment>
                    ))}
                </Fragment>
            : 
                <Fragment>
                    {baseDatos.noticias.map((noticia) => (
                        <Fragment> 
                            { tipo === noticia.tipo 
                            ?
                                <Fragment>
                                    {/* <Noticia
                                        titulo = {noticia.titulo}
                                        img = {noticia.img} 
                                        url = {noticia.url}
                                        key = {noticia.url}
                                    /> */}
                                    {/* { MostarAnuncios() } */}
                                </Fragment>
                            : null}
                        </Fragment>
                    ))}
                </Fragment>
            }
        </div>
    );
}

export default Noticias;