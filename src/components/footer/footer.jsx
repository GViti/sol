import React from 'react';
import logo from '../../assets/Secretoflight_logo.png';
import './footer.css';
import instagram_icon from '../../assets/images/social-icon/icons8-instagram.svg';
import pinterest_icon from '../../assets/images/social-icon/icons8-pinterest.svg';
import twitter_icon from '../../assets/images/social-icon/icons8-twitterx.svg';
import { Link } from 'react-router-dom';

function Footer(){

    return(
        <footer>
            <div className="footer-head">
                <div className="social-icon">
                    <div className="social-icon-container">
                        <a href='https://www.instagram.com/secretoflight_official/' target='_blank'><img src={instagram_icon} alt="" /></a>
                    </div>
                    <div className="social-icon-container">
                        <a href='https://www.instagram.com/secretoflight_official/' target='_blank'><img src={pinterest_icon} alt="" /></a>
                    </div>
                    <div className="social-icon-container">
                    <a href='https://www.instagram.com/secretoflight_official/' target='_blank'><img src={twitter_icon} alt="" /></a>
                    </div>
                </div>
                <Link to='/'>
                    <div className="logo-container footer-logo">
                        <img src={logo} alt="Logo Secret of Light" />
                    </div>
                </Link>
            </div>
            <div className="footer-main">
                <div>
                    <h2>Accendiamo idee brillanti insieme!</h2>
                     <Link to='/contacts'>
                        <div className="contact-us footer-cus">
                            <h4>Contattaci</h4>
                        </div>
                    </Link>
                </div>
                <nav className="footer-menu">
                    <ul>
                        {/* <li><Link to='/products'>Prodotti</Link></li> */}
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/catalog'>Catalogo</Link></li>
                        {/* <li><Link to='/about'>Chi siamo</Link></li> */}
                    </ul>
                    <ul>
                        <li><Link to='/works'>Lavori</Link></li>
                        <li><Link to='/contacts'>Contatti</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-information">
                <p className="fiscal-data">Secret of Light S.A.S. di Bosticco R. <br /> P.IVA 10886050011 <a href="mailto:info@secretoflight.it">info@secretoflight.it</a></p>
                <div className="secondary-info">
                    <p>
                    <a href="https://www.iubenda.com/privacy-policy/74486230" className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " target='_blank' title="Privacy Policy ">Privacy Policy</a>
                    </p>
                    <p>
                    <a href="https://www.iubenda.com/privacy-policy/74486230/cookie-policy" className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " target='_blank' title="Cookie Policy ">Cookie Policy</a>
                    </p>
                    {/* <p><a href="#">Additional Content Information</a></p> */}
                </div>
            </div>

        </footer>
    )
}

export default Footer