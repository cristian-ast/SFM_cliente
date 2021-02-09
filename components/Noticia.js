import React from 'react';
import Link from 'next/link';

const Noticia = ({titulo, img, url}) => {
    
    //Recordar que los url de la api no traen el " / " al inicio, pero los del context si!!!

    return (
        <Link href={"/noticias/" + url}>
            <div 
                style={{ backgroundImage: `url(${img})`, backgroundSize: "contain"}}
                className="noticia--indivudual" 
            >
                <div className="titulo--noticia">
                    <p><b>{titulo.slice( 0 , 70) + "..."}</b></p>
                </div>
            </div>
        </Link>
        
    );
}


export default Noticia;