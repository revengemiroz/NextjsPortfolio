import Head from 'next/head';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "../../styles/components/_layout.module.css";

function Layout({ children, page, title, image }) {
    return (
        <div>
            {title && <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property='og:title' content={title} key={title} />
                <meta key='og:image' name='og:image' content={image}></meta>
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