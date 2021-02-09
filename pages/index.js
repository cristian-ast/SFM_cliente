import Head from 'next/head';
import { useEffect, useState } from 'react';
import Container from '../components/Container';

import clienteAxios from '../config/axios';

//import AdsComputadora from '../components/AdsComputadora';
import Noticias from '../components/Noticias';

import portada from '../images/portada.jpg';
import logo from '../images/logo.jpeg';

export default function Home() {

  const [ BaseDatos, guardarBaseDatos ] = useState([]);

  const BuscarLasNoticias = async () => {

    try {
      const respuesta = await clienteAxios.get('/api/noticias/recientes/');
      guardarBaseDatos(respuesta.data);
        
    } catch (error) {
      console.log(error);
      guardarBaseDatos([]);
    }
  }

  useEffect(() => {
    BuscarLasNoticias();
  }, []);

  return (
    <Container>
      <Head>
          <meta charset="utf-8" />
          <title>Somos SFM</title>
          <meta name="description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet" />
          {/*Open Graph / Facebook*/}
          <meta property="og:title" content="Somos SFM"/>
          <meta property="og:description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana" />
          <meta property="og:image" content={logo}></meta>
          {/* Twitter */}
          <meta property="twitter:title" content="Somos SFM"/>
          <meta property="twitter:description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana"/>
          <meta property="twitter:image" content={logo}></meta>
      </Head>
      <div className="inicio">
        <div className="cuerpo">
          <div className="portada">
            <br/>
            <br/>
            <div className="contenido">
              <img src={portada} className="imglogo" alt="logo"/>
            </div>
            <div className="contenerdorTextos">
              <div className="textos">
                <h2>Bienvenido al mejor lugar para las noticias</h2>
              </div>
            </div>
          </div>
          <div>
            <Noticias BaseDatos = {BaseDatos} tipo="inicio"/>
          </div>
        </div>
        {/* <AdsComputadora /> */}
      </div>
    </Container>
  )
}
