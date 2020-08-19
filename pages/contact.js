import React from 'react';
import { ReactHover } from 'react-hover';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";

import styles from '../styles/pages/contact.module.css'

function contact(props) {
    return (
        <Layout title='Contact | Miroz Devkota'>
            <Header />
            <div className={styles.container}>
                <p className={styles.title}>Let's get in touch.</p>

                <p className={styles.description}>Do you have some project you want to realize? Please, contact me via <a href='mailto:miroz.devkota@gmail.com'>email</a>.</p>
            </div>
            <Footer />
        </Layout>

    );
}

export default contact;