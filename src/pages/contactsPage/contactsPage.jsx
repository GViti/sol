import React  from "react";
import './contactsPage.css';
import HeroContacts from "./contactsSection/heroContacts/HeroContacts.jsx";
import FormContatti from '../../components/Form/form.jsx';


function ContactsPage(){
    return(
        <>
            <HeroContacts/>
            <FormContatti/>
            <div>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.517133193011!2d7.723882199999999!3d45.19687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478865c6dd3f1b71%3A0xb436c563bb985c35!2sSecret%20of%20Light!5e0!3m2!1sit!2sit!4v1729269578166!5m2!1sit!2sit"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default ContactsPage;