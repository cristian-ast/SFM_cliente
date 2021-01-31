import React, { useState } from 'react';
import Head from 'next/head';
import BaseDatosProvider from '../context/BaseDatosContext';
import AnunciosProvider from '../context/AnunciosContext';
import Container from '../components/Container';
import PanelEditor from '../components/PanelEditor';
import logo from '../images/portada.jpg';

const CrearNoticia = () => {

    const [ ningunaNoticiaSelecionada, guardarNingunaNoticiaSelecionada ] = useState(true);

    return (
        <BaseDatosProvider>
            <AnunciosProvider>
                <Container>
                    <Head>
                        <meta charset="utf-8" />
                        <title>Somos SFM - Crear Noticas </title>
                        <meta name="description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana" />
                        <link rel="icon" href="/favicon.ico" />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet" />

                        {/*Open Graph / Facebook*/}
                        <meta property="og:title" content="Somos SFM - Deportes"/>
                        <meta property="og:description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana" />
                        <meta property="og:image" content={logo}></meta>

                        {/* Twitter */}
                        <meta property="twitter:title" content="Somos SFM - Deportes"/>
                        <meta property="twitter:description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana"/>
                        <meta property="twitter:image" content={logo}></meta>
                    </Head>
                    <div className="inicio">
                        <div className="panel-contenedor">
                            <div className="contenedor-panel-editor">
                                    <PanelEditor 
                                        guardarNingunaNoticiaSelecionada={guardarNingunaNoticiaSelecionada} 
                                    /> 
                            </div>
                        </div>
                    </div>
                </Container> 
            </AnunciosProvider>
        </BaseDatosProvider>
    );
}

export default CrearNoticia;