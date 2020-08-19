import Head from 'next/head';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "../../styles/components/_layout.module.css";

function Layout({ children, page, title }) {
    return (
        <div>
            {title && <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property='og:title' content={title} key={title} />
            </Head>}

            <div>
                <main className={styles.container}>

                    {children}

                </main>
            </div>
        </div>
    );
}

export default Layout;