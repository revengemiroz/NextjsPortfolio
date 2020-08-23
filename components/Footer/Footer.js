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
                        <a aria-label="Github" rel="noopener" href='https://github.com/revengemiroz' target='_blank'>
                            <i className='fab fa-github'></i>
                        </a>
                    </li>

                    <li className='box'>
                        <a aria-label="Twitter" rel="noopener" href='https://twitter.com/DevkotaMiroz' className='twitter' target='_blank'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>


                    <li className='box'>
                        <a aria-label="Instagram" href='https://www.instagram.com/mirozuzamaki/?hl=en' className='instagram' rel="noopener" target='_blank'>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>

                    <li className='box'>
                        <a aria-label="LinkedIn" rel="noopener" href='https://www.instagram.com/chiyaaaaa/?hl=en' className='linkedin' target='_blank'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>



                    <li className='box'>
                        <a aria-label="Codepen" rel="noopener" href='https://codepen.io/miroz-devkota' target='_blank'>
                            <i className='fab fa-codepen'></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;