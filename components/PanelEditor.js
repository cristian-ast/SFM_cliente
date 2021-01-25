import React, { useContext, Fragment } from 'react';
import { BaseDatosContext } from '../context/BaseDatosContext';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const PanelEditor = () => {

    const { baseDatos } = useContext(BaseDatosContext);
    

    const onChange = e => {
        
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="editor-noticias" >

            <div className="contenedor-editor">
                <center><h3>Crear o Editar noticia</h3></center>
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
                            <select name="tipo" id="tipo" className="campo-form">
                                <option>--Selecione una opción--</option>
                                <option value="Actualidad">Actualidad</option>
                                <option value="Deportes">Deportes</option>
                                <option value="Justicia">Justicia</option>
                                <option value="Farandula">Farándula</option>
                                <option value="Economia">Economía</option>
                            </select>
                            <br/>
                        </div>
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
                                onChange={onChange}
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
                                onChange={onChange}
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
                                onChange={onChange}
                            />
                            <Button
                                className="PanelBuscadorVerNoticia-img-botones z-index-b"
                                color="#ab003c"
                                startIcon={<AddCircleOutlineIcon />}
                            >
                                Agregar otro párrafo
                            </Button>
                        </div>
                        <div className="panel-editor-campos">
                            <br/>
                            <label htmlFor="img">Imagen pequeña : (Es oblogatorio que esa 350 x 180)</label>
                            <input className="campo-form" type="file" name="adjunto" accept=".pdf,.jpg,.png,.jpeg" />
                        </div>
                        <div className="panel-editor-campos">
                            <br/>
                            <label htmlFor="img">Imagen grande : (Es recomendable que sea 1000 x 600)</label>
                            <input className="campo-form" type="file" name="adjunto" accept=".pdf,.jpg,.png,.jpeg" />
                            <br/>
                            <br/>
                        </div>
                        <div className="panel-editor-campos panel-editor-botones">
                            <Button
                                type="reset"
                                className="PanelBuscadorVerNoticia-img-botones z-index-b"
                                color="#ab003c"
                                startIcon={<CancelIcon />}
                            >
                                Cancelar
                            </Button>
                            <Button
                                className="PanelBuscadorVerNoticia-img-botones z-index-b"
                                color="#ab003c"
                                startIcon={<SaveIcon />}
                            >
                                Guadar Cambios
                            </Button>
                        </div>
                </form>
            </div>
        </div>
    );
}


export default PanelEditor;