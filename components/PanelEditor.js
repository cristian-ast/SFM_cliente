import React, { useContext, useState, useEffect } from 'react';
import { BaseDatosContext } from '../context/BaseDatosContext';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import VistaPreviavideo from './VistaPreviaVideo';
import CuerpoNoticia from './CuerpoNoticia';

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
        cuerpo : [
            "",
            "",
            ""
        ]
    });

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
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
        p10: "",
        p11: "",
        p12: ""
    });

    const onChangeCuerpo = e => {
        guardarCuerpoNoticia({
            ...cuerpoNoticia,
            [e.target.name] : e.target.value
        })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    const [nCuerpo, GuaedarNCuerpo]  = useState({
        canParr: 3
    });

    const onChangeCanParr = e => {
        GuaedarNCuerpo({
            [e.target.name] : e.target.value
        });
    }

    // extraer el numero de parrafos
    const { canParr } = nCuerpo;

    useEffect( () => {
        let pn = "";

        for ( let contador = parseInt(canParr) + 1 ; contador <= 12 ; contador++) {
            pn = `p${contador}`;
            guardarCuerpoNoticia({
                ...cuerpoNoticia,
                [pn] : ""
            }) 
            console.log(pn);
        }
    }, [nCuerpo]);

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
                            <label htmlFor="canParr">Cantidad de Párrafos :</label>
                            <select 
                                name="canParr" 
                                id="canParr" 
                                className="siVideo-campo-form"
                                onChange={onChangeCanParr}
                            >
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <br/>
                        </div>

                        <CuerpoNoticia
                            onChangeCuerpo={onChangeCuerpo}
                            nCuerpo={nCuerpo.canParr}
                        />
                        
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
                                size="small"
                                startIcon={<CancelIcon />}
                                onClick={ () => {guardarNingunaNoticiaSelecionada(true)}}
                            >
                                Cancelar
                            </Button>
                            <Button
                                className="PanelBuscadorVerNoticia-img-botones z-index-b"
                                color="primary"
                                variant="contained"
                                size="small"
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