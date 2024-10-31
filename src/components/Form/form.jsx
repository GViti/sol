import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css'; 

function FormContatti() {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false); // Stato per il modal

    const inviaEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_07ijamd',  // Il tuo Service ID
            'template_0qtihob', // Il tuo Template ID
            form.current,       // Riferimento al form
            'aOvkaX9kGnibzIh9R' // Il tuo User ID
        )
        .then((result) => {
            console.log('Email inviata:', result.text);
            // alert('Email inviata con successo!');
        }, (error) => {
            console.log('Errore nell\'invio:', error.text);
            // alert('Errore durante l\'invio dell\'email.');
        });

        e.target.reset();
    };


    return (
        <section className="contactForm" id='form'>
            <h3>Contattaci per informazioni</h3>
            <h4>Compila il form e sarai ricontattato al più presto con le informazioni richieste</h4>
            <form ref={form} onSubmit={inviaEmail}>
                <label>Nome: </label>
                <input type="text" name="nome" required />

                <label>Cognome: </label>
                <input type="text" name="cognome" required />

                <label>Email: </label>
                <input type="email" name="email" required />

                <label>Numero di telefono: </label>
                <input type="tel" name="telefono" required />

                <label>Messaggio: </label>
                <textarea name="messaggio" rows="5" required></textarea>
                <div className='inputPrivacy'>
                    <input type="checkbox" name="privacy" required/>
                    <label className="checkbox">
                        Accetto la <a href="https://www.iubenda.com/privacy-policy/74486230" className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " target='_blank' title="Privacy Policy ">Privacy Policy</a> e acconsento al trattamento dei miei dati.
                    </label>
                </div>
                <input type="submit" value="Invia" />
            </form>
        </section>
    );
}

export default FormContatti;

