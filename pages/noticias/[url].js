import Container from '../../components/Container';
import AdsComputadora from '../../components/AdsComputadora';
import AdsNew from '../../components/AdsNew';
import AdsMovil from '../../components/AdsMovil';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import React, {Fragment} from 'react';
import Head from 'next/head';
import copy from 'copy-to-clipboard';
import clienteAxios from '../../config/axios';

const PageNoticia = ({datos}) => {

  const link = `https://somossfm.com/noticias/${datos._id}`;

  const compartirEnFacebook = `https://www.facebook.com/sharer/sharer.php?u=https%3A//somossfm.com/noticias/${datos._id}`;
  
  const copiar = () => {
      copy(link);
      alert('Enlace copiado');
  }

  const MESES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const fecha = new Date(datos.fecha);
  
  const Mes = MESES[fecha.getMonth()]; // Devuelve el mes actual en formato de texto

  const Dia =parseInt(fecha.getDate()) + 1;

  const Ano = fecha.getFullYear();

    const multiploDe3 = (n) => {
        var resto = n % 3;

        if(resto === 0) return true;
        
        else return false;
    }

    let contador = 0;

    const MostarAnuncios = () => {
        contador++
        if (multiploDe3(contador)) {
            return (
                <AdsMovil />
            );
        } else {
            return null;
        }
    }

    return (
      <Container>
          <div className="inicio">
              <div className="cuerpo--noticias">
                  <Head>
                      <title>{datos.titulo}</title>
                      <meta name="description" content={datos.cuerpo[0].slice( 0 , 95) + "..."} />
                      {/*Open Graph / Facebook*/}
                      <meta property="og:title" content={datos.titulo}/>
                      <meta property="og:description" content={datos.cuerpo[0].slice( 0 , 95) + "..."} />
                      <meta property="og:image" content={datos.img}></meta>
                      {/* Twitter */}
                      <meta property="twitter:title" content={datos.titulo}/>
                      <meta property="twitter:description" content={datos.cuerpo[0].slice( 0 , 95) + "..."}/>
                      <meta property="twitter:image" content={datos.img}></meta>
                  </Head>
                  <div className="cuerpo--noticias--cabecera">
                      {datos.video == "null"
                      ?
                        (
                          <img className="cuerpo--noticias--imagen" src={datos.img} alt="imagen" />
                        )
                      :
                        (
                          <iframe className="cuerpo--noticias--video" src={datos.video} frameborder="0" ></iframe>
                        )
                      }
                      <div className="cuerpo--noticias--titulo__fecha">
                          <p className="cuerpo--noticias--titulo"><b>{datos.titulo}</b></p>
                          <p className="cuerpo--noticias--fecha">{datos.tipo} {'>>'} {Mes} {Dia}, {Ano}</p>
                          <div className="contenedor-info-noticia-cuerpo-opciones">
                            <a href={compartirEnFacebook} target="_blanck" className="contenedor-info-boton">
                                <Button
                                    className="z-index-b contenedor-info-noticia-cuerpo-botones" 
                                    color="primary"
                                    size="small"
                                    variant="contained"
                                    startIcon={<FacebookIcon/>}
                                >
                                    Compartir
                                </Button>
                            </a>
                            <div className="contenedor-info-boton">
                                <Button
                                    className="z-index-b contenedor-info-noticia-cuerpo-botones"
                                    size="small"
                                    variant="contained"
                                    startIcon={<LinkIcon/>}
                                    onClick={copiar}
                                >
                                    Copiar enlace
                                </Button>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="Ncuerpo--noticias--desarrollo">
                    <div className="cuerpo--noticias--desarrollo">
                        {datos.cuerpo.map((parrafo) => (
                            <Fragment  key={parrafo}>
                              {parrafo != "" ? 
                                <Fragment>
                                    <p className="cuerpo--noticias--desarrollo--parrafo">{parrafo}</p>
                                </Fragment>
                              : null}
                            </Fragment>
                        ))}
                    </div>
                    <AdsNew/>
                  </div>
              </div>
              <AdsComputadora /> 
          </div>
      </Container> 
    );
}

PageNoticia.getInitialProps = async (ctx) => {

    try {
      const id = ctx.query.url;

      const respuesta = await clienteAxios.post('/api/noticias/id/', { _id : id });

      const datos = respuesta.data;
      
      return {datos}
      
    } catch (error) {

      const datos = null;

      return {datos}
    }
}

export default PageNoticia;