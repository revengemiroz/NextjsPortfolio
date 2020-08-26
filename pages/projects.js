import React from 'react';
import Zoom from 'react-medium-image-zoom';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import HTML from "../public/project/html.png";
import KNOT from "../public/project/four.png";
import Mern from "../public/project/mern.png";
import Github from "../public/project/github.png";

import styles from "../styles/pages/projects.module.css";

function projects(props) {
    return (
        <Layout title='Projects | Miroz Devkota'>
            <Header />

            <div className={styles.containers}>
                <p className={styles.projects}>
                    Projects
                </p>

                <p className={styles.commingSoon}>
                    Below are some of my Projects that i have done on the
                    road to being a good Front End Developer. Most of my stacks
                    include Javascript Framework like <a href='https://reactjs.org/' rel="noopener noreferrer" target='_blank'>React Js</a>, <a href='https://nextjs.org/' rel="noopener noreferrer" target='_blank'>Next Js</a>, <a href='https://nodejs.org/en/' rel="noopener noreferrer" target='_blank'>Node Js</a>, <a href='https://expressjs.com/' rel="noopener noreferrer" target='_blank'>Express Js</a> and databases such as <a href='https://www.postgresql.org/' rel="noopener noreferrer" target='_blank'>PostgreSQL</a>, <a href='https://www.mongodb.com/' rel="noopener noreferrer" target='_blank'>MongoDB</a>.
                </p>

                <div className={styles.projectCollection}>

                    <div className={styles.project}>
                        <div className={styles.imgContainer}>
                            <Zoom>
                                <img
                                    alt='knots'
                                    src={KNOT}
                                    className={styles.project__thumbnail}
                                ></img>
                            </Zoom>
                        </div>
                        <div className={styles.titleContainer}>
                            <span className={styles.number}>No.<span>4</span></span>
                            <h4>Knots</h4>
                            <a className={styles.link} href='https://jovial-nobel-308250.netlify.app/' rel="noopener noreferrer" target='_blank'>
                                <span className='fas fa-external-link-alt'></span>
                            </a>
                        </div>
                    </div>


                    <div className={styles.project}>
                        <div className={styles.imgContainer}>
                            <Zoom>
                                <img
                                    alt='MERN Stack'
                                    src={Mern}
                                    className={styles.project__thumbnail}
                                ></img>
                            </Zoom>
                        </div>
                        <div className={styles.titleContainer}>
                            <span className={styles.number}>No.<span>3</span></span>
                            <h4>MERN Stack</h4>
                            <a className={styles.link} href='https://inspiring-visvesvaraya-fd5979.netlify.app/' rel="noopener noreferrer" target='_blank'>
                                <span className='fas fa-external-link-alt'></span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.imgContainer}>
                            <Zoom>
                                <img src='https://cdn.discordapp.com/attachments/736210763315675158/745963481768919050/unknown.png' alt='vanilla Js'></img>
                            </Zoom>
                        </div>
                        <div className={styles.titleContainer}>
                            <span className={styles.number}>No.<span>2</span></span>
                            <h4>Vanilla Js</h4>
                            <a className={styles.link} href='https://flamboyant-sinoussi-7ab217.netlify.app/' rel="noopener noreferrer" target='_blank'>
                                <span className='fas fa-external-link-alt'></span>
                            </a>
                        </div>
                    </div>



                    <div className={styles.project}>
                        <div className={styles.imgContainer}>
                            <Zoom>
                                <img src={HTML} alt='Html'></img>
                            </Zoom>
                        </div>
                        <div className={styles.titleContainer}>
                            <span className={styles.number}>No.<span>1</span></span>
                            <h4>HTML and CSS</h4>
                            <a className={styles.link} href='https://mirozdevkota.netlify.app/' rel="noopener noreferrer" target='_blank'>
                                <span className='fas fa-external-link-alt'></span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.imgContainer}>
                            <Zoom>
                                <img
                                    alt='knots'
                                    src={Github}
                                    width='500'
                                    className={styles.project__thumbnail}
                                ></img>
                            </Zoom>
                        </div>
                        <div className={styles.titleContainer}>
                            <span className={styles.number}>No.<span>5</span></span>
                            <h4>Github with multi language support</h4>
                            <a className={styles.link} href='https://quizzical-mirzakhani-861b64.netlify.app/' rel="noopener noreferrer" target='_blank'>
                                <span className='fas fa-external-link-alt'></span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.imgContainer}>
                            <Zoom>
                                <img
                                    alt='form'
                                    src='https://cdn.discordapp.com/attachments/736210763315675158/745947194938490930/unknown.png'
                                    className={styles.project__thumbnail}
                                ></img>
                            </Zoom>
                        </div>
                        <div className={styles.titleContainer}>
                            <span className={styles.number}>No.<span>6</span></span>
                            <h4>Form</h4>
                            <a className={styles.link} href='https://quirky-meninsky-53241c.netlify.app/' rel="noopener noreferrer" target='_blank'>
                                <span className='fas fa-external-link-alt'></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </Layout>
    );
}

export default projects;