import Head from 'next/head';
import Footer from '../Footer/Footer';

function Layout({ children, page, title }) {
    return (
        <div>
            {title && <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property='og:title' content={title} key={title} />
            </Head>}

            <div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;