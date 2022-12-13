import React from 'react';
import { Github, Instagram, Linkedin, Whatsapp } from 'react-bootstrap-icons';
import { FormattedMessage } from 'react-intl';
import '../styles/Contact.scss';
const Contact = () => {
    return (
        <div className="cont-contact">
            <h4 id='cont'><FormattedMessage id='cont' /></h4>
            <div className="logos-contact">
               <a target="blanket" href="https://www.linkedin.com/in/luciano-ayala-a032a91b4/"><Linkedin className='linked'/></a> 
               <a target="blanket" href="https://github.com/LucianoWeb"><Github className='github'/></a> 
               <a target="blanket" href="https://www.instagram.com/luciano.ayala94/"><Instagram className='insta'/></a> 
               <a target="blanket" href="https://api.whatsapp.com/send/?phone=%2B34618615470&text&type=phone_number&app_absent=0"><Whatsapp className='what'/></a> 
        
            </div>
        </div>

    );
}

export default Contact;