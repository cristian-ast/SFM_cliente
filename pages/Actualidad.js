import Head from 'next/head';
import { useEffect, useState } from 'react';
import clienteAxios from '../config/axios';
import Container from '../components/Container';
import AdsComputadora from '../components/AdsComputadora';
import Noticias from '../components/Noticias';

import logo from '../images/logo.jpeg';

const Actualidad = () => {

    const [ BaseDatos, guardarBaseDatos ] = useState([]);

    const BuscarLasNoticias = async () => {
      
      const datos = { tipo : "Actualidad" };

      try {

        const respuesta = await clienteAxios.post('/api/noticias/tipo/', datos);
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
              <title>Somos SFM - Actualidad </title>
              <meta name="description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet" />

              {/*Open Graph / Facebook*/}
              <meta property="og:title" content="Somos SFM - Actualidad"/>
              <meta property="og:description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana" />
              <meta property="og:image" content={logo}></meta>

              {/* Twitter */}
              <meta property="twitter:title" content="Somos SFM - Actualidad"/>
              <meta property="twitter:description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana"/>
              <meta property="twitter:image" content={logo}></meta>
          </Head>
          <div className="inicio">
            <div className="sub-inicio">
                <div className="sub-cuerpo">
                    <Noticias BaseDatos = {BaseDatos} tipo="Actualidad"/>
                </div>
                <AdsComputadora />
            </div>
          </div>
      </Container> 
    );
}

export default Actualidad;