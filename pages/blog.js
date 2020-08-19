import React from 'react';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";

import styles from "../styles/pages/blog.module.css";

function blog(props) {
    return (
        <Layout title='Blog | Miroz Devkota'>
            <Header></Header>
            <div className={styles.containers}>
                <p>It's under construction</p>

            </div>
            <Footer></Footer>
        </Layout>
    );
}

export default blog;