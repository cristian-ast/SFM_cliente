import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import Link from 'next/link';
import usuario from '../images/usuario.png';

const ContenedorMuenu = () => {
    return (
        <div className="contenedor-panel-editor-menu">
            <div className="contenedor-panel-editor-menu-opciones">
                <div className="contenedor-perfil">
                    <div className="contenedor-perfil-img">
                        <img src={usuario} alt="Foto de Usuario"/>
                    </div>
                    <div className="contenedor-perfil-descripcion">
                        <p>Victor Manuel</p>
                        <p>victormanueldiazrosado@gmail.com</p>
                    </div>
                </div>
                <h3>Menu</h3>
                <Link href={"/CrearNoticia"}>
                    <Button
                        className="PanelBuscadorVerNoticia-img-botones z-index-b with-boton-menu"
                        size="small"
                        variant="contained"
                        startIcon={<AddCircleOutlineIcon />}
                    >
                        Crear Noticia
                    </Button>
                </Link>
                <br/>
                <Button
                    className="PanelBuscadorVerNoticia-img-botones z-index-b with-boton-menu"
                    size="small"
                    variant="contained"
                    disabled
                    startIcon={<EditIcon />}
                >
                    Editar Noticia
                </Button>  
                <br/>
                <Button
                    className="PanelBuscadorVerNoticia-img-botones z-index-b with-boton-menu"
                    color="primary"
                    size="small"
                    variant="contained"
                    disabled
                    startIcon={<AddCircleOutlineIcon />}
                >
                    Crear Anuncio
                </Button> 
                <br/>
                <Button
                    className="PanelBuscadorVerNoticia-img-botones z-index-b with-boton-menu"
                    size="small"
                    variant="contained"
                    disabled
                    startIcon={<EditIcon />}
                >
                    Editar Anuncio
                </Button>
            </div>    
        </div>
    );
}

export default ContenedorMuenu;