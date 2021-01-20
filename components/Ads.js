import React from 'react';

const Ads = ({titulo, img, url}) => {
    return (
        <div className="Asd">
            <a href={url} target="_blank" rel="noreferrer">
                <img src={img} alt="Imagen de Ads" className="ImagenAds" />
            </a>
        </div>
    );
}

export default Ads;