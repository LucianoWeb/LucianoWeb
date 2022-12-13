import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/NavHeader.scss';

const Nav = () => {
    return ( 
        <div className='nav-ul'>
                        <ul>
                            <li>
                                <a href="#pro"><span><FormattedMessage id='nav-pro' /></span><span><FormattedMessage id='nav-pro2'/></span></a>
                            </li>
                            <li>
                                <a href="#know"><span><FormattedMessage id='nav-know'/></span><span><FormattedMessage id='nav-know2'/></span></a>
                            </li>
                            <li>
                                <a href="#cont"><span><FormattedMessage id='nav-cont'/></span>
                                    <span><FormattedMessage id='nav-cont2'/></span></a>
                            </li>
                        </ul>
                    </div>
     );
}
 
export default Nav;