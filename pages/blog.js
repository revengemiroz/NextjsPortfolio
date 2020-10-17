import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";

import Waiting from "../assets/ghost.png";

import styles from "../styles/pages/blog.module.css";

function blog(props) {
  return (
    <Layout title="Blog | Miroz Devkota">
      <Header />
      <div className={styles.containers}>
        <div className={styles.imgContainer}>
          <img src={Waiting} alt="waiting"></img>
        </div>
        <p>It's under construction</p>
      </div>
      <Footer />
    </Layout>
  );
}

export default blog;
