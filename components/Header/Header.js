import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false);

  const router = useRouter();

  return (
    <header className="header">
      <nav className="nav-main">
        <ul>
          <li>
            <span>
              <Link href="/">
                <a className={router.pathname == "/" ? "active" : ""}>
                  Home
                </a>
              </Link>
            </span>
          </li>

          <li>
            <span
              onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
            >
              <Link href="/projects">
                <a
                  className={
                    router.pathname == "/projects" ? "active" : ""
                  }
                >
                  Projects
                </a>
              </Link>
            </span>
          </li>

          <li>
            <span>
              <Link href="/cv.pdf" target="_self" download>
                <a>CV</a>
              </Link>
            </span>
          </li>

          <li>
            <span>
              <Link href="/blog">
                <a
                  className={
                    router.pathname == "/blog" ? "active" : ""
                  }
                >
                  Blog
                </a>
              </Link>
            </span>
          </li>

          <li>
            <span
              onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
            >
              <Link href="/about">
                <a
                  className={
                    router.pathname == "/about" ? "active" : ""
                  }
                >
                  About Me
                </a>
              </Link>
            </span>
          </li>

          <li>
            <span
              onClick={() => toggleMobileMenu(!isMobileMenuVisible)}
            >
              <Link href="/contact">
                <a
                  className={
                    router.pathname == "/contact" ? "active" : ""
                  }
                >
                  Contact
                </a>
              </Link>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
