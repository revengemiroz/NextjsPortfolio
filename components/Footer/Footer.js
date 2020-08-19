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
                    <li>
                        <a href='https://twitter.com/DevkotaMiroz' target='_blank'>
                            <span className='fab fa-twitter'></span>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.facebook.com/hotdude.miroj/' target='_blank'>
                            <span className='fab fa-facebook'></span>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.instagram.com/mirozuzamaki/?hl=en' rel="noopener noreferrer" target='_blank'>
                            <span className='fab fa-instagram'></span>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.instagram.com/chiyaaaaa/?hl=en' target='_blank'>
                            <span className='fab fa-linkedin'></span>
                        </a>
                    </li>

                    <li>
                        <a href='https://github.com/revengemiroz' target='_blank'>
                            <span className='fab fa-github'></span>
                        </a>
                    </li>

                    <li>
                        <a href='https://codepen.io/miroz-devkota' target='_blank'>
                            <span className='fab fa-codepen'></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;