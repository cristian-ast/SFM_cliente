import Head from 'next/head';
import BaseDatosProvider from '../context/BaseDatosContext';
import AnunciosProvider from '../context/AnunciosContext';
import Container from '../components/Container';

import AdsComputadora from '../components/AdsComputadora';
import Noticias from '../components/Noticias';

const Farandula = () => {
    return (
        <BaseDatosProvider>
            <AnunciosProvider>
                <Container>
                    <Head>
                        <title>Somos SFM - Farándula </title>

                        {/*Open Graph / Facebook*/}
                        <meta property="og:title" content="Somos SFM - Farándula"/>

                        {/* Twitter */}
                        <meta property="twitter:title" content="Somos SFM - Farándula"/>
                    </Head>
                    <div className="inicio">
                        <div className="sub-inicio">
                            <div className="sub-cuerpo">
                                <Noticias tipo = "Farándula"/>
                            </div>
                            <AdsComputadora />
                        </div>
                    </div>
                    
                </Container> 
            </AnunciosProvider>
        </BaseDatosProvider>
    );
}

export default Farandula;