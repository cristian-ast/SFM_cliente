import React, { createContext, useState } from 'react';

// crear el Contex
export const AnunciosContext = createContext();

// provider es donde se encuenran las funciones y state
const AnunciosProvider = (props) => {

    // crear el state del Context
    const [ baseDatosAnuncios ] = useState(
        {
          anuncios : [
            {
                titulo : "Somos SFM",
                url : "https://api.whatsapp.com/send?phone=18093158252&text=Buenas%20Somos%20SFM.%20Deseo%20conocer%20m%C3%A1s%20sobre%20los%20anuncios%20en%20su%20portal%20de%20noticias.",
                img : "https://valencia.eazycity.com/media/catalog/product/cache/220/image/9df78eab33525d08d6e5fb8d27136e95/a/d/ad2_spa_1.png",
                descripcion : "Aprovecha las oferta de lanzamiento y anunciate con nosotros1"
            },
            {
                titulo : "Somos SFM",
                url : "https://api.whatsapp.com/send?phone=18093158252&text=Buenas%20Somos%20SFM.%20Deseo%20conocer%20m%C3%A1s%20sobre%20los%20anuncios%20en%20su%20portal%20de%20noticias.",
                img : "https://elempresario.mx/sites/default/files/imagecache/nota_completa/Publicidad.jpg",
                descripcion : "Aprovecha las oferta de lanzamiento y anunciate con nosotros2"
            },
            {
                titulo : "Somos SFM",
                url : "https://api.whatsapp.com/send?phone=18093158252&text=Buenas%20Somos%20SFM.%20Deseo%20conocer%20m%C3%A1s%20sobre%20los%20anuncios%20en%20su%20portal%20de%20noticias.",
                img : "https://www.conquistainternet.com/fotos/blog/400/portatil-tu-anuncio-aqui.jpg",
                descripcion : "Aprovecha las oferta de lanzamiento y anunciate con nosotros3"
            }
          ]
        }
    );

    return (
        <AnunciosContext.Provider
            value={{
                baseDatosAnuncios
            }}
        >
            {props.children}
        </AnunciosContext.Provider>
    )
}

export default AnunciosProvider;