import React from 'react';

const AdsN = ({titulo, img, url}) => {
    return (
        <div className="AsdN">
            {url == "No"? 
                <div>
                    <img src={img} alt="Imagen de Ads" className="ImagenAdsN" />
                </div>
            : 
                <a href={url} target="_blank" rel="noreferrer">
                    <img src={img} alt="Imagen de Ads" className="ImagenAdsN" />
                </a>
            }
        </div>
    );
}

export default AdsN;