import React from 'react';

const VistaPreviavideo = ({video}) => {

    const ExtraerURLVideo = (link) => {

        let tamano = link.length;
        let indice = 0;
        let guardandoURL = false;
        let URL = "";

        while(tamano > indice) {
            // Este codigo solo funciona cuando el elace de Youtube empieza con https://www.youtube.com/watch?v=
            if ( (link.charAt(indice) ) == "=") {
                indice++;
                guardandoURL = true;
                while(guardandoURL) {
                    if ((link.charAt(indice)) != "&" ) {
                        URL += link.charAt(indice);
                    } else {
                        console.log(URL);
                        return URL;
                    }
                    indice++;
                    if (tamano <= indice) {
                        guardandoURL = false;
                    }
                }
            } else {
                // Este codigo solo funciona cuando el elace de Youtube empieza con https://youtu.be/
                if ((tamano == indice + 1) && (URL.length == 0)) {
                    indice = 16;
                    while(tamano > indice) {
                        if ( indice == 16 ) {
                            indice++;
                            guardandoURL = true;
                            while(guardandoURL) {
                                if ((link.charAt(indice)) != "&" ) {
                                    URL += link.charAt(indice);
                                } else {
                                    return URL;
                                }
                                indice++;
                                if (tamano <= indice) {
                                    guardandoURL = false;
                                }
                            }
                        }
                        indice++;
                    }
                    return URL;
                }
            }
            indice++;
        }
        return URL;
    }

    const miniURL = ExtraerURLVideo(video);

    const link = `https://www.youtube.com/embed/${miniURL}`;

    return (
        <div className="contenedor-vista-previa-video">
            <iframe width="380" height="220" src={link} frameborder="0" ></iframe>
        </div>
    );
}

export default VistaPreviavideo;