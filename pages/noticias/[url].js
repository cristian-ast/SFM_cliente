import Container from '../../components/Container';

//import AdsComputadora from '../../components/AdsComputadora';
import AdsMovil from '../../components/AdsMovil';

import React, {Fragment} from 'react';
import Head from 'next/head';

import clienteAxios from '../../config/axios';

const PageNoticia = ({datos}) => {

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
                          <h1 className="cuerpo--noticias--titulo">{datos.titulo}</h1>
                          <p className="cuerpo--noticias--fecha">{datos.tipo} {'>>'} {Mes} {Dia}, {Ano}</p>
                      </div>
                  </div>
                  <div className="cuerpo--noticias--desarrollo">
                      {datos.cuerpo.map((parrafo) => (
                          <Fragment>
                              <p key={parrafo} className="cuerpo--noticias--desarrollo--parrafo">{parrafo}</p>
                              {/* {MostarAnuncios()} */}
                          </Fragment>
                      ))}
                  </div>
              </div>
              {/* <AdsComputadora /> */}
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