import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const PanelBuscadorVerNoticia = ({titulo, img, url}) => {
    return (
        <div className="PanelBuscadorVerNoticia-card">
            <div className="PanelBuscadorVerNoticia-img-botones">
                <img className="PanelBuscadorVerNoticia-imagen" src={img} alt="image" />
                <Button
                    className="PanelBuscadorVerNoticia-img-botones z-index-b"
                    color="#ab003c"
                    size="small"
                    startIcon={<DeleteIcon />}
                >
                    Borrar
                </Button>
                <Button
                    className="PanelBuscadorVerNoticia-img-botones z-index-b"
                    color="#ab003c"
                    size="small"
                    startIcon={<EditIcon />}
                >
                    Editar
                </Button>
            </div>
            <div className="PanelBuscadorVerNoticia-p">
                <p>{titulo}</p>
            </div>
        </div>
    );
}
    
export default PanelBuscadorVerNoticia;