import React from "react";
import './catalogPage.css';
import sol_catalog_img from '../../assets/images/catalogo_SOL.png';
import catalogImg from '../../assets/images/Catalogo.webp';
import lumines_catalog from '../../assets/images/LUMINES_2023_2024.pdf';


function CatalogPage (){
    return (
        <div className="catalog_page">
        <h1>Scarica il catalogo dei prodotti</h1>
        <p></p>
        <div className="catalog_container">
            <div className="single_catalog">
                <div className="catalog_image_container">
                <a href={lumines_catalog} target="_blank"><img src={sol_catalog_img} alt="" /></a>
                </div>
                <h4 className="brand_catalog">Lumines</h4>
                <p className="download_text"><a href={lumines_catalog} target="_blank" download>Download catalogo Secret of Light</a></p>
                <div className="divider"></div>
            </div>
            <div className="single_catalog">
                <div className="catalog_image_container">
                <a href={lumines_catalog} target="_blank"><img src={catalogImg} alt="" /></a>
                </div>
                <h4 className="brand_catalog">Lumines 2.0</h4>
                <p className="download_text"><a href={lumines_catalog} target="_blank">Download catalogo</a></p>
                <div className="divider"></div>
            </div>
        </div>
        </div>
    )
}

export default CatalogPage;


