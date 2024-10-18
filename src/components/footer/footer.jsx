import React, { useState }from 'react';
import logo from '../../assets/Secretoflight_logo.png';
import './footer.css';
import instagram_icon from '../../assets/images/social-icon/icons8-instagram.svg';
import pinterest_icon from '../../assets/images/social-icon/icons8-pinterest.svg';
import twitter_icon from '../../assets/images/social-icon/icons8-twitterx.svg';
import { Link } from 'react-router-dom';

function Footer(){

    const [isModalOpen, setIsModalOpen] = useState(false); 

     // Funzione per aprire il modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Funzione per chiudere il modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <footer>
            <div className="footer-head">
                <div className="social-icon">
                    <div className="social-icon-container">
                        <img src={instagram_icon} alt="" />
                    </div>
                    <div className="social-icon-container">
                        <img src={pinterest_icon} alt="" />
                    </div>
                    <div className="social-icon-container">
                        <img src={twitter_icon} alt="" />
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
                        <a onClick={openModal}>Privacy Policy</a>
                    </p>
                    {/* <p><a href="#">Additional Content Information</a></p> */}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Privacy Policy</h2>
                        <h4>Finalità del trattamento:</h4>
                        <p>I dati personali forniti tramite il modulo di contatto saranno utilizzati esclusivamente per rispondere alle richieste di informazioni da parte dell'utente.</p>
                        <h4>Dati raccolti:</h4>
                        <p>Nome, cognome, email e numero di telefono</p>
                        <h4>Titolare del Trattamento dei Dati:</h4>
                        <ul>
                            <li> Secret of Light S.A.S. - Via Lombardore 124,
                            10040 Leinì TO</li>
                            <li>Indirizzo email del Titolare:info@secretoflight.it</li>
                        </ul>
                        <h4>Diritti dell'utente:</h4>
                        <p>Gli utenti hanno il diritto di accedere ai propri dati personali, richiedere la correzione o la cancellazione dei dati, e limitare il trattamento dei propri dati inviando una richiesta all'indirizzo email sopra indicato.</p>
                    </div>
                </div>
            )}

        </footer>
    )
}

export default Footer