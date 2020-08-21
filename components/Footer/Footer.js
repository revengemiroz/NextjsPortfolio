import React from 'react';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function Footer(props) {
    return (

        <footer className='footer'>
            <nav>
                <ul>
                    <li className='box'>
                        <a href='https://twitter.com/DevkotaMiroz' target='_blank'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>


                    <li className='box'>
                        <a href='https://www.instagram.com/mirozuzamaki/?hl=en' rel="noopener noreferrer" target='_blank'>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>

                    <li className='box'>
                        <a href='https://www.instagram.com/chiyaaaaa/?hl=en' target='_blank'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>

                    <li className='box'>
                        <a href='https://github.com/revengemiroz' target='_blank'>
                            <i className='fab fa-github'></i>
                        </a>
                    </li>

                    <li className='box'>
                        <a href='https://codepen.io/miroz-devkota' target='_blank'>
                            <i className='fab fa-codepen'></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;