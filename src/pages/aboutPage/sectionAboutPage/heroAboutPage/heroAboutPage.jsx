import React from "react";
import './heroAboutPage.css';
import AnimatedLogo from "../../../../components/elements/AnimatedLogo/AnimatedLogo";

function HeroAbout (){
    return(
        <section className="hero-about">
            <div className="hero-about-content">
                <div className="img-logo-animated">
                    <AnimatedLogo/>
                </div>
                <div className="hero-about-txt">
                    <h1>Secret of light</h1>
                    <p style={{padding: '10px 0'}}>Dal 2013, Secret of Light è sinonimo di eccellenza nel settore dell'illuminazione a LED, con radici che risalgono al 2003. La nostra <strong>passione</strong> per il lighting è il motore che ci spinge a <strong>innovare</strong> continuamente e a offrire soluzioni su misura per ogni esigenza. Specializzati nel settore contract, collaboriamo con fornitori all'avanguardia per garantire sempre il meglio ai nostri clienti.</p>
                    <p>Offriamo una gamma completa di servizi: dalla progettazione illuminotecnica alle produzioni personalizzate nei nostri laboratori, fino al supporto formativo e alla consulenza specializzata. Siamo sempre aggiornati sulle ultime tecnologie per offrire <strong>soluzioni efficienti e di qualità.</strong></p>
                </div>
            </div>
        </section>
        
    )
}

export default HeroAbout;