import React from 'react';
import '../styles/Knowledge.scss';
import css from '../assets/css-3.png'
import git from '../assets/git.png';
import sass from '../assets/sass.png';
import js from '../assets/java.png';
import bs from '../assets/bootstrap.png';
import html from '../assets/html.png';
import react from '../assets/react.png';
import gsaplogo from '../assets/gsap.png';
import know from '../assets/bgknow2.png'
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FormattedMessage } from 'react-intl';



const Knowledge = () => {
    
  useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('#g1', {
            y: -40,
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.5,
            y:0,
            scrollTrigger: {
                trigger: ('#g1'),
                start: +700
            }
        }),
        gsap.fromTo('#g2', {
            y: -40,
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.5,
            y:0,
            delay:1,
            scrollTrigger: {
                trigger: ('#g2'),
                start: +700
            }
        }),
        gsap.fromTo('#g3', {
            y: -40,
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.5,
            y:0,
            delay:1.5,
            scrollTrigger: {
                trigger: ('#g3'),
                start: +700
            }
        }),
        gsap.fromTo('#g4', {
            y: -40,
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.5,
            y:0,
            delay:2,
            scrollTrigger: {
                trigger: ('#g4'),
                start: +700
            }
        })
        
    }, [])

 
    return (
        <div className="cont-know">
            <h3 id='know'><FormattedMessage id='know' /></h3>
            <div className="know-flex">
                <div className='skills'>
                    <div id='g1'>
                        <img src={html} alt="html" />
                        <p>HTML</p>
                    </div>
                    <div id='g2'>
                        <img src={css} alt="css" />
                        <p>CSS</p>
                    </div>
                    <div id='g3'>
                        <img src={js} alt="js" />
                        <p>Javascript</p>
                    </div>
                    <div id='g4'>
                        <img src={react} alt="react" />
                        <p>React</p>
                    </div>

                </div>

                <div>
                    <img src={know} className="knowimg" alt="developer" />
                </div>
                <div className='skills'>
                    <div id='g1'>
                        <img src={bs} alt="bs" />
                        <p>Bootstrap</p>
                    </div>
                    <div id='g2'>
                        <img src={sass} alt="sass" />

                        <p>Sass</p>
                    </div>
                    <div id='g3'>
                        <img src={gsaplogo} alt="gsap" />
                        <p>GSAP</p>
                    </div>
                    <div  id='g4'>
                        <img src={git} alt="git" />
                        <p>Git</p>
                    </div>
                </div>
                <div>
                </div>

            </div>

        </div>
    );
}

export default Knowledge;