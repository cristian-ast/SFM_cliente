import Head from 'next/head';
import BaseDatosProvider from '../context/BaseDatosContext';
import AnunciosProvider from '../context/AnunciosContext';
import Container from '../components/Container';

import AdsComputadora from '../components/AdsComputadora';
import Noticias from '../components/Noticias';

const Actualidad = () => {
    return (
    <BaseDatosProvider>
      <AnunciosProvider>
        <Container>
          <Head>
            <title>Somos SFM - Actualidad </title>

            {/*Open Graph / Facebook*/}
            <meta property="og:title" content="Somos SFM - Actualidad"/>

            {/* Twitter */}
            <meta property="twitter:title" content="Somos SFM - Actualidad"/>
          </Head>
          <div className="inicio">
            <div className="sub-inicio">
                <div className="sub-cuerpo">
                    <Noticias tipo = "Actualidad"/>
                </div>
                <AdsComputadora />
            </div>
          </div>
        </Container> 
      </AnunciosProvider>
    </BaseDatosProvider>
    );
}

export default Actualidad;