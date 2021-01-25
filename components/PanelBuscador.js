import React, { useContext, Fragment } from 'react';
import { BaseDatosContext } from '../context/BaseDatosContext';
import PanelBuscadorVerNoticia from './PanelBuscadorVerNoticia';

const PanelBuscador = () => {

    const { baseDatos } = useContext(BaseDatosContext);
    

    const onChange = e => {
        
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="buscador-noticias">
            <div className="buscador-noticias-cabecera">
                <h3>Noticias</h3>
                <form
                        onSubmit={onSubmit}
                    >
                        <div className="campo-form buscador-noticias-cabecera-buscar">
                            <input
                                className="btn-buscar-contenedor"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Buscar noticia..."
                                onChange={onChange}
                            />
                            <input
                                type="submit"
                                className="btn-buscar"
                                value="buscar"
                            />
                        </div>
                </form>
            </div>
            <br/>
            <div  className="buscador-noticias-cuerpo">
                {baseDatos.noticias.map((noticia) => (
                    <PanelBuscadorVerNoticia
                        titulo = {noticia.titulo}
                        img = {noticia.img} 
                        url = {noticia.url}
                        key = {noticia.url}
                    />
                ))}
            </div>
        </div>
    );
}


export default PanelBuscador;