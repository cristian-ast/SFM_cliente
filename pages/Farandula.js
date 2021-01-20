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
                    <div className="sub-inicio">
                        <div className="sub-cuerpo">
                            <Noticias tipo = "Farándula"/>
                        </div>
                        <AdsComputadora />
                    </div>
                </Container> 
            </AnunciosProvider>
        </BaseDatosProvider>
    );
}

export default Farandula;