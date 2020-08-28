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
                <meta key='og:image' name='og:image' content={image} />

                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176053043-1"></script>
                <script data-ad-client="ca-pub-3843144567571433" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-176053043-1');
                        
                `
                }} />
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