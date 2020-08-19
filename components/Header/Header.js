import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

function Header(props) {
    const [isMobileMenuVisible, toggleMobileMenu] = React.useState(false)

    const router = useRouter()

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

                    <li>
                        <span>
                            <Link href="/">
                                <a className={router.pathname == "/" ? 'active' : ''}>Home</a>
                            </Link>
                        </span>
                    </li>

                    <li>
                        <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                            <Link href="/blog">
                                <a className={router.pathname == "/projects" ? 'active' : ''}>Projects</a>
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
                                <a className={router.pathname == "/blog" ? 'active' : ''}>Blog</a>
                            </Link>
                        </span>
                    </li>

                    <li>
                        <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                            <Link href="/about">
                                <a className={router.pathname == "/about" ? 'active' : ''}>About Me</a>
                            </Link>
                        </span>
                    </li>

                    <li>
                        <span onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                            <Link href="/contact">
                                <a className={router.pathname == "/contact" ? 'active' : ''}>Contact</a>
                            </Link>
                        </span>
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;