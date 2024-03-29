import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import Giraffe from "../assets/giraffeweyes.png";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout page="home" title="Home | Miroz Devkota" image={Giraffe}>
      <Header />
      <div className={styles.container}>
        <img
          className={styles.profilePic}
          src={Giraffe}
          alt="ProfilePic"
        ></img>

        <p className={styles.name}>Miroz Devkota</p>

        <p className={styles.description}>
          React Js developer from{" "}
          <a href="https://www.youtube.com/watch?v=0crqE92gjis&t=4s">
            Nepal.
          </a>
        </p>
      </div>

      <Footer />
    </Layout>
  );
}
