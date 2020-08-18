import React, { useState } from 'react';
import Link from 'next/link'

function Header(props) {
    const [isMobileMenuVisible, toggleMobileMenu] = React.useState(false)

    const generateClassName = () => {
        const windowGlobal = typeof window !== 'undefined' && window
        console.log(windowGlobal.innerWidth);

        if (windowGlobal.innerWidth <= 768 && isMobileMenuVisible) {
            // edi screen is less than 768 and mobile menu is false
            //hide the mobile menu and show the button to show the mobile menu
            return 'nav-main--visible'
        }
        else if (windowGlobal.innerWidth <= 768 && !isMobileMenuVisible) {
            // edi screen is less than 768 and mobile menu is true
            // show the mobile menu page
            return 'nav-menu--hidden'
        }
        else {
            return null
        }
    }


    return (
        <header className='header'>
            <nav className='nav-main'>
                <ul className={generateClassName()}>
                    {/* <li>
                        <button className="nav__toggler nav__toggler--close" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                            <span>Menu</span>
                        </button>
                    </li> */}

                    <li>
                        <span>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </span>
                    </li>

                    <li>
                        <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                            <Link href="/blog">
                                <a>Projects</a>
                            </Link>
                        </span>
                    </li>

                    <li>
                        <span>
                            <Link href="/cv" >
                                <a target='_blank'>CV</a>
                            </Link>
                        </span>
                    </li>

                    <li>
                        <span>
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </span>
                    </li>

                    <li>
                        <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                            <Link href="/about">
                                <a>About Me</a>
                            </Link>
                        </span>
                    </li>

                    <li>
                        <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </span>
                    </li>
                </ul>

                {/* <button className="nav__toggler nav__toggler--toggle" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                    <span>Nav</span>
                </button> */}
            </nav>
        </header>
    );
}

export default Header;