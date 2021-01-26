import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const ContenedorPanelEditorMuenu = ({guardarNingunaNoticiaSelecionada}) => {

    return (
        <div className="contenedor-panel-editor-menu">

            <div className="contenedor-panel-editor-menu-opciones">

                <h3>Ninguna noticia selecionada</h3>

                <Button
                    className="PanelBuscadorVerNoticia-img-botones z-index-b"
                    color="primary"
                    size="small"
                    variant="contained"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={ () => {guardarNingunaNoticiaSelecionada(false)}}
                >
                    Crear nueva noticia
                </Button>  
            </div>
                              
        </div>
    );
}


export default ContenedorPanelEditorMuenu;