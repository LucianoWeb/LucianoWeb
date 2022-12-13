import React from 'react';
import '../styles/Header.scss';
import lu from '../assets/Lu.png';
import spanish from '../assets/spanish.png'
import english from '../assets/english.png'
import { useState } from 'react';
import Nav from './Nav';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useEffect } from 'react';
import { useContext } from 'react';
import { langContext } from '../components/langContext';
import { FormattedMessage } from 'react-intl';


const Header = () => {
    const language = useContext(langContext);
    const [about, setAbout] = useState(false);
    
    useEffect(() =>{
        const myText = new SplitType('#front')
        gsap.to('.char',{
            y: 0,
            stagger: 0.1,
            delay: 0.5,
            duration: 0.05
        })
    }, [])

    return (
        <>
            <div className='header'>
                <div className='luc'>
                    <img className='img-lu' src={lu} alt="img Luciano" />
                    <button className='but-he' value={about} onClick={() => setAbout(!about)}><FormattedMessage id='header.about'/></button>
                    {about === true ? <p className='scale-up-center' id='p-ab'><FormattedMessage id='header.aboutp'/></p> : ''}
                </div>
                <div className='cont-header'>
                    <div className='nav-header'>
                        <div className='flag-btn'>
                            <button onClick={() => language.setLang('es-ES')}><img className='flag' src={spanish} alt="spanish flag" /></button>
                            <button onClick={() => language.setLang('en-US')}><img className='flag' src={english} alt="USA flag" /></button>
                        </div>
                        <Nav />
                    </div>
                    <div className='text-header'>
                        <h1 id='front'>Front-end Developer</h1>
                        
                    </div>
                </div>

            </div>
        </>
       
    );
}
export default Header;