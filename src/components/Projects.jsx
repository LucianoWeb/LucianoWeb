import React from 'react';
import '../styles/Projects.scss';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import bg4 from '../assets/bg4.png';
import { FormattedMessage } from 'react-intl';
import Project from './Project';


const Projects = () => {
    return (
        <div className='cont-pro'>
            <h3 id='pro'><FormattedMessage id='pro'/></h3>
            <div className="proyects">
                <Project img={bg1} href={"https://coffeesup.netlify.app/"} alt={"coffee's up"} h4={"Coffee's UP"}/>
                <Project img={bg2} href={"https://netlfixcopy.netlify.app/"} alt={"Netlfix"} h4={"Netlfix"}/>
                <Project img={bg4} href={"https://rickndmortyapi.netlify.app/"} alt={"Rick & Morty"} h4={"R & M API"}/>
                <Project img={bg3} href={"https://technoborg.netlify.app/"} alt={"Technoborg"} h4={"Technoborg"}/>
                
            </div>
        </div>
    );
}

export default Projects;