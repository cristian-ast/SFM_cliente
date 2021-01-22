import Head from 'next/head';
import BaseDatosProvider from '../context/BaseDatosContext';
import AnunciosProvider from '../context/AnunciosContext';
import Container from '../components/Container';

import AdsComputadora from '../components/AdsComputadora';
import Noticias from '../components/Noticias';

const Deportes = () => {
    return (
        <BaseDatosProvider>
            <AnunciosProvider>
                <Container>
                    <Head>
                        <title>Somos SFM - Deportes </title>

                        {/*Open Graph / Facebook*/}
                        <meta property="og:title" content="Somos SFM - Deportes"/>

                        {/* Twitter */}
                        <meta property="twitter:title" content="Somos SFM - Deportes"/>
                    </Head>
                    <div className="sub-inicio">
                        <div className="sub-cuerpo">
                            <Noticias tipo = "Deportes"/>
                        </div>
                        <AdsComputadora />
                    </div>
                </Container> 
            </AnunciosProvider>
        </BaseDatosProvider>
    );
}

export default Deportes;