import React from 'react';
import '../styles/Projects.scss';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import bg4 from '../assets/bg4.png';
import { FormattedMessage } from 'react-intl';


const Projects = () => {
    return (
        <div className='cont-pro'>
            <h3 id='pro'><FormattedMessage id='pro'/></h3>
            <div className="proyects">
                <a href="https://coffeesup.netlify.app/" target="blanket">
                    <div className="box-pro">
                        <h4>Coffees' Up</h4>
                        <img src={bg1} alt="coffees'up" />
                    </div>
                </a>
                <a href="https://netlfixcopy.netlify.app/" target="blanket">
                    <div className="box-pro">
                        <h4>Netlfix</h4>
                      <img src={bg2} alt="netflix" />
                    </div>
                </a>
                <a href="https://rickndmortyapi.netlify.app/" target="blanket">
                    <div className="box-pro">
                        <h4>R & M API</h4>
                        <img src={bg4} alt="Rick & Morty" />
                    </div>
                </a>
                <a href="https://technoborg.netlify.app/" target="blanket">
                    <div className="box-pro">
                        <h4>Technoborg</h4>
                        <img src={bg3} alt="technoborg" />
                    </div>
                </a>
                
            </div>
        </div>
    );
}

export default Projects;