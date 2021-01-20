import BaseDatosProvider from '../context/BaseDatosContext';
import AnunciosProvider from '../context/AnunciosContext';
import Container from '../components/Container';

import AdsComputadora from '../components/AdsComputadora';
import Noticias from '../components/Noticias';

import logo from '../images/portada.jpg';

export default function Home() {
  return (
    <BaseDatosProvider>
      <AnunciosProvider>
        <Container>
          <div className="inicio">
            <div className="cuerpo">
              <div className="portada">
                <br/>
                <br/>
                <div className="contenido">
                  <img src={logo} className="imglogo" alt="logo"/>
                </div>
                <div className="contenerdorTextos">
                  <div className="textos">
                    <h2>Bienvenido al mejor lugar para las noticias</h2>
                  </div>
                </div>
              </div>
              <div>
                <Noticias tipo = "Inicio"/>
              </div>
            </div>
            <AdsComputadora />
          </div>
        </Container> 
      </AnunciosProvider>
    </BaseDatosProvider>
  )
}
