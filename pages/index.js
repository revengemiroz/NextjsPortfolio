import Head from 'next/head'
import Layout from '../components/Layout/Layout';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout page='home' title='Home | Miroz Devkota'>
      <Header />
      <div className={styles.container}>





        <p className={styles.name}>Miroz Devkota</p>

        <p className={styles.description}>Web designer and developer from <a href='https://visitnepal2020.com/'>Nepal.</a></p>




      </div>

      <Footer />
    </Layout>
  )
}
