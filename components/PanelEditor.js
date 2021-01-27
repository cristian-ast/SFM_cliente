import React, { useContext, useState, useEffect } from 'react';
import { BaseDatosContext } from '../context/BaseDatosContext';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import VistaPreviavideo from './VistaPreviaVideo';

const PanelEditor = ({guardarNingunaNoticiaSelecionada}) => {

    const { baseDatos } = useContext(BaseDatosContext);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    const [nuevaNoticia, guardarNuevaNoticia] = useState({
        titulo : "",
        url : "",
        fecha : "",
        autor : "",
        tipo : "",
        img : "",
        imgBig : "",
        video : null,
        cuerpo : []
    });

    // extraer la noticia
    const { titulo, url, fecha, autor, tipo, img, imgBig, video, cuerpo } = nuevaNoticia;

    const onChange = e => {
        guardarNuevaNoticia({
            ...nuevaNoticia,
            [e.target.name] : e.target.value
        })
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    const [ estadoVideo, guardarEstadoVideo ] = useState({
        siVideo : false,
        videoURL : ""
    });

    // extraer la Estado del Video
    const { siVideo, videoURL } = estadoVideo;

    const onChangeVideo = e => {
        guardarEstadoVideo({
            ...estadoVideo,
           [e.target.name] : e.target.value
        })
    }

    // cuando el usuario pone el video como no
    useEffect(() => {
        if ( (siVideo == "false") || (siVideo == false) ) {
            guardarNuevaNoticia({
                ...nuevaNoticia,
                video : null
            })
            guardarEstadoVideo({
                ...estadoVideo,
                videoURL : ""
            })
        }
    }, [siVideo]);

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    const [ cuerpoNoticia, guardarCuerpoNoticia ] = useState({
        parrafo1: "",
        parrafo2: "",
        parrafo3: ""
    });
    
    // extraer el contenido de la noticia
    const { parrafo1, parrafo2, parrafo3 } = cuerpoNoticia;

    const onChangeCuerpo = e => {
        guardarCuerpoNoticia({
            ...cuerpoNoticia,
            [e.target.name] : e.target.value
        })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="editor-noticias" >

            <div className="contenedor-editor">
                <center><h3>Crear Nueva Noticia</h3></center>
                <form
                        onSubmit={onSubmit}
                    >
                        <div className="panel-editor-campos">
                            <label htmlFor="titulo">Título :</label>
                            <input
                                className="campo-form"
                                type="text"
                                id="titulo"
                                name="titulo"
                                placeholder="Escriba el título de la noticia..."
                                onChange={onChange}
                            />
                        </div>
                        <div className="panel-editor-campos">
                            <label htmlFor="url">URL : </label>
                            <p>(No poner acentos. No usar la Ñ. No usar espacios. Dividir las parabras con: "-". No usar caracteres raros. Por favor, mirar el ejemplo)</p>
                            <input
                                className="campo-form"
                                type="text"
                                id="url"
                                name="url"
                                placeholder="Escriba la URL Ej: Accidente-de-Auto-en-Carretera"
                                onChange={onChange}
                            />
                        </div>
                        <div className="panel-editor-campos">
                            <label htmlFor="fecha">Fecha :</label>
                            <input
                                className="campo-form"
                                type="text"
                                id="fecha"
                                name="fecha"
                                placeholder="Escriba la fecha..."
                                onChange={onChange}
                            />
                        </div>
                        <div className="panel-editor-campos">
                            <label htmlFor="autor">Autor :</label>
                            <input
                                className="campo-form"
                                type="text"
                                id="autor"
                                name="autor"
                                placeholder="Escriba el autor..."
                                onChange={onChange}
                            />
                        </div>
                        
                        <div className="panel-editor-campos">
                            <label htmlFor="tipo">Tipo de noticia :</label>
                            <select 
                                name="tipo" 
                                id="tipo" 
                                className="campo-form"
                                onChange={onChange}
                            >
                                <option value="">--Selecione una opción--</option>
                                <option value="Actualidad">Actualidad</option>
                                <option value="Deportes">Deportes</option>
                                <option value="Justicia">Justicia</option>
                                <option value="Farandula">Farándula</option>
                                <option value="Economia">Economía</option>
                            </select>
                            <br/>
                        </div>
                        <hr/>
                        <div className="panel-editor-campos">
                            <br/>
                            <label><center>Cuerpo de la noticia</center></label>
                            <br/>
                        </div>
                        
                        <div className="panel-editor-campos">
                            <label htmlFor="parrafo1">Párrafo 1 :</label>
                            <textarea 
                                className="campo-form campo-textarea"
                                type="text"
                                id="parrafo1"
                                name="parrafo1"
                                placeholder="Escriba un párrafo de la noticia..."
                                onChange={onChangeCuerpo}
                            />
                        </div>
                        <div className="panel-editor-campos">
                            <label htmlFor="parrafo1">Párrafo 2 :</label>
                            <textarea 
                                className="campo-form campo-textarea"
                                type="text"
                                id="parrafo2"
                                name="parrafo2"
                                placeholder="Escriba un párrafo de la noticia..."
                                onChange={onChangeCuerpo}
                            />
                        </div>
                        <div className="panel-editor-campos">
                            <label htmlFor="parrafo3">Párrafo 3 :</label>
                            <textarea 
                                className="campo-form campo-textarea"
                                type="text"
                                id="parrafo3"
                                name="parrafo3"
                                placeholder="Escriba un párrafo de la noticia..."
                                onChange={onChangeCuerpo}
                            />
                            <Button
                                className="PanelBuscadorVerNoticia-img-botones z-index-b"
                                color="inherit"
                                startIcon={<AddCircleOutlineIcon />}
                            >
                                Agregar otro párrafo
                            </Button>
                        </div>
                        <hr/>
                        <div className="panel-editor-campos">
                            <br/>
                            <label htmlFor="img">Imagen pequeña : (Es oblogatorio que esa 350 x 180)</label>
                            <input 
                                className="campo-form" 
                                type="file" 
                                name="img"
                                accept=".pdf,.jpg,.png,.jpeg" 
                                onChange={onChange}
                            />
                        </div>
                        <div className="panel-editor-campos">
                            <br/>
                            <label htmlFor="img">Imagen grande : (Es recomendable que sea 1000 x 600)</label>
                            <input 
                                className="campo-form" 
                                type="file" 
                                name="imgBig" 
                                accept=".pdf,.jpg,.png,.jpeg"
                                onChange={onChange}
                            />
                            <br/>
                        </div>
                        <hr/>
                        <div className="panel-editor-campos">
                            <label htmlFor="tipo">Video : </label>
                            <select 
                                id="tipo" 
                                onChange={onChangeVideo}
                                name="siVideo"
                                className="siVideo-campo-form"
                            >
                                <option value="false" >No</option>
                                <option value="true">Si</option>
                            </select>
                            <br/>
                            { (siVideo == "true") ? 
                            (
                                <div className="panel-editor-campos">
                                    <label htmlFor="titulo">Enlace a video de Youtube :</label>
                                    <input
                                        className="campo-form "
                                        type="text"
                                        id="titulo"
                                        name="videoURL"
                                        placeholder="Pegar aquí el enlace del video..."
                                        onChange={onChangeVideo}
                                    />
                                    <p><b>Importante :</b> Antes de guardar la noticia acegúrese que el video cargue correctamente :</p>
                                    <VistaPreviavideo 
                                        videoURL={videoURL}
                                        nuevaNoticia={nuevaNoticia}
                                        guardarNuevaNoticia={guardarNuevaNoticia}
                                    />
                                </div>
                            )
                            : null}
                        </div>
                        <br/>
                        <br/>
                        <hr/>
                        <div className="panel-editor-campos panel-editor-botones">
                            <Button
                                type="reset"
                                className="PanelBuscadorVerNoticia-img-botones z-index-b"
                                color="secondary"
                                variant="contained"
                                startIcon={<CancelIcon />}
                                onClick={ () => {guardarNingunaNoticiaSelecionada(true)}}
                            >
                                Cancelar
                            </Button>
                            <Button
                                className="PanelBuscadorVerNoticia-img-botones z-index-b"
                                color="primary"
                                variant="contained"
                                startIcon={<SaveIcon />}
                            >
                                Guadar Cambios
                            </Button>
                        </div>
                        <br/>
                </form>
            </div>
        </div>
    );
}


export default PanelEditor;