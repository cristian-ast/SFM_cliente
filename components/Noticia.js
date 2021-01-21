import React from 'react';
import Link from 'next/link';

const Noticia = ({titulo, img, url}) => {
    
    //Recordar que los url de la api no traen el " / " al inicio, pero los del context si!!!

    return (
        <Link href={"/noticias" + url}>
            <div 
                style={{ backgroundImage: `url(${img})`}}
                className="noticia--indivudual" 
            >
                <div className="titulo--noticia">
                    <p>{titulo}</p>
                </div>
            </div>
        </Link>
        
    );
}


export default Noticia;