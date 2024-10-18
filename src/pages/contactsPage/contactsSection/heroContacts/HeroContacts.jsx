import React from "react";
import './HeroContacts.css';
// import insileda from '../../../../assets/images/INSILEDA_1.jpg'

function HeroContacts () {

    return(
        <section className="heroContacts">
            {/* <img src={insileda} alt=""/> */}
            <h2>In Secret of Light siamo sempre pronti ad accoglierti.</h2>
            <h3>Contattaci per informazioni</h3>
            <div className="contact-us">
                <h4><a href="/contacts#form">Contattaci</a></h4>
            </div>
        </section>
    )

}

export default HeroContacts;