import Layout from "../components/Layout/Layout";
import styles from '../styles/CV.module.css'


import ProfilePic from "../public/profilePic.gif";
import Github from "../assets/github.png";

import Email from "../assets/email.png";
import Football from "../assets/soccer.png";
import Games from "../assets/joystick.png";
import Video from "../assets/video.png";

import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/javascript.png";
import ReactJs from "../assets/react.png";
import Mongodb from "../assets/mongodb.jpg";
import Figma from "../assets/figma.jpg";
import NextJs from "../public/favicon.ico";
import NodeJs from "../assets/nodejs.png";
import Git from "../assets/git.png";

import Line from "../assets/Line.png";
import Vertical from "../assets/vertical.png";
import Ellipse from "../assets/ellipse.svg";

import Experience from "../assets/Group 1.svg";
import End from "../assets/Group 2.svg";

import Link from 'next/link';

import Pdf from "../assets/pdf.png";


function cv(props) {
    return (
        <Layout page='CV' title='CV | Miroz Devkota'>

            <div className={styles.container}>

                <div className={styles.link}>
                    <Link href='/cv.pdf' target='_self' download>

                        <img src={Pdf} alt='pdf'></img>
                    </Link>
                </div>

                <div className={styles.CvContainer}>
                    <div className={styles.leftside}>

                        <div className={styles.imgContainer}>

                            <img src={ProfilePic} alt='profilePic'></img>
                        </div>

                        <div className={styles.author}>
                            <span className={styles.name}>MIROZ DEVKOTA</span>
                            <p>
                                <p>Front End Developer, Javascript</p>
                                <p>MERN Stack, NEXT Js</p>
                            </p>
                        </div>

                        <div className={styles.aboutMe}>
                            <span className={styles.header}>ABOUT ME</span>

                            <p>When I went to Japan with my girlfriend we drove a
                            hired car to the middle of the town we were in parked near a
                            Ginza and left a 5000 yen bill on the dash with
                            the windows rolled down. She told me that nobody
                            would steal it. We went shopping for about two
                            hours and returned to the vehicle the money was
                                gone. Guess whose fault was this.</p>
                        </div>

                        <div className={styles.interests}>
                            <span className={styles.header}>WEB TECHNOLOGIES</span>

                            <div className={styles.collectionInterest}>
                                <div>
                                    <div>
                                        <img src={NodeJs} alt='Node Js'></img>
                                    </div>
                                    <span>Node Js</span>
                                </div>



                                <div>
                                    <div>
                                        <img src={ReactJs} alt='reactjs'></img>
                                    </div>
                                    <span>React Js</span>
                                </div>
                                <div>
                                    <div>
                                        <img src={NextJs} alt='next js'></img>
                                    </div>
                                    <span>Next Js</span>
                                </div>

                            </div>
                            <div className={styles.collectionInterest}>


                                <div >
                                    <div>
                                        <img src='https://webassets.mongodb.com/_com_assets/cms/JSON Document Copy 4@3x-aszlgv7njl.svg' alt='html'></img>
                                    </div>
                                    <span>HTML</span>
                                </div>



                                <div>
                                    <div>
                                        <img src='https://webassets.mongodb.com/_com_assets/cms/Stitch triggers-ryg6nk6gv4.svg' alt='css'></img>
                                    </div>
                                    <span>CSS</span>
                                </div>

                                <div>
                                    <div>
                                        <img src={Js} alt='js'></img>
                                    </div>
                                    <span>JS</span>
                                </div>



                            </div>

                            <div className={styles.collectionInterest}>

                                <div>
                                    <div>
                                        <img src={Figma} alt='figma'></img>
                                    </div>
                                    <span>Figma</span>
                                </div>

                                <div>
                                    <div>
                                        <svg height="45" width="22" viewBox="0 0 13 26"><path d="M11.7 10.4C10.3 4.3 7.4 2.7 6.7 1.6 6.3 1.1 6.1 0.5 5.8 0 5.8 0.5 5.7 0.9 5.3 1.3 4.3 2.1 0.4 5.3 0 12.2-0.3 18.7 4.8 22.6 5.5 23 6 23.3 6.7 23 7 22.8 9.4 21.1 12.8 16.7 11.7 10.4" fill="#10AA50"></path>
                                            <path d="M6 19.5C5.8 21.1 5.7 22 5.4 22.9 5.4 22.9 5.6 24.4 5.8 26L6.3 26C6.5 24.9 6.7 23.8 6.9 22.7 6.2 22.3 6 20.9 6 19.5Z" fill="#B8C4C2"></path>
                                            <path d="M7 22.8L7 22.8C6.3 22.4 6.1 20.9 6.1 19.6 6.3 17.3 6.3 15 6.3 12.6 6.2 11.4 6.3 1.5 6 0 6.2 0.5 6.4 1 6.7 1.4 7.4 2.6 10.3 4.2 11.7 10.3 12.8 16.6 9.5 21.1 7 22.8Z" fill="#12924F"></path>
                                        </svg>

                                    </div>
                                    <span>MongoDb</span>
                                </div>

                            </div>

                        </div>


                        <div className={styles.iLike}>
                            <span className={styles.header}>I LIKE</span>

                            <div className={styles.collection}>
                                <div>
                                    <div>
                                        <img src={Football} alt='football'></img>
                                    </div>
                                    <span>Football</span>
                                </div>

                                <div>
                                    <div>
                                        <img src={Games} alt='games'></img>
                                    </div>
                                    <span>Online Games</span>
                                </div>

                                <div>
                                    <div>
                                        <img src={Video} alt='video'></img>
                                    </div>
                                    <span>Movies</span>
                                </div>
                            </div>
                        </div>





                        <div className={styles.contacts}>
                            <span className={styles.header}>CONTACTS</span>


                            <div className={styles.list}>
                                <a href='https://github.com/revengemiroz' target='_blank'>
                                    <div className={styles.icons}>
                                        <img src={Github} alt='github' />
                                    </div>
                                </a>
                                <p>github.com/revengemiroz</p>
                            </div>

                            <div className={styles.list}>
                                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=miroz.devkota@gmail.com' target='_blank'>
                                    <div className={styles.icons}>
                                        <img src={Email} alt='email' />
                                    </div>
                                </a>
                                <p>miroz.devkota@gmail.com</p>
                            </div>

                        </div>

                    </div>

                    {/* horizontal line */}
                    <div className={styles.hr}>
                        <img src={Line} alt='line'></img>
                    </div>

                    <div className={styles.vertical}>
                        <img src={Vertical} alt='vertical'></img>
                    </div>

                    {/* right side */}
                    <div className={styles.rightside}>

                        <div className={styles.topexperience}>
                            <img src={Experience} alt='experience'></img>
                        </div>


                        {/* //Education */}

                        <div className={styles.education}>
                            <span>EDUCATION</span>

                            <div className={styles.edulist}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" strokeWidth="3" />
                                </svg>

                                <p>
                                    <p><span className={styles.strong}>Bachelor's Degree</span> |  ~ FEB, 2019</p>
                                    <p style={{ maxWidth: '380px' }}>Nepal College of Information Technology, B.E in Software Englineering</p>
                                </p>
                            </div>

                            <div className={styles.edulist}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" strokeWidth="3" />
                                </svg>

                                <p>
                                    <p><span className={styles.strong}>Intermediate</span>  ( + 2 ) &nbsp;|&nbsp;  ~ DEC, 2013</p>

                                    <p>Prasadi Academy, HSEB</p>
                                </p>
                            </div>

                            <div className={styles.edulist}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" strokeWidth="3" />
                                </svg>

                                <p>
                                    <p><span className={styles.strong}>SLC</span>  ( GRADE 10 ) &nbsp;|&nbsp;  ~ DEC, 2011</p>

                                    <p>Graded English Medium School (GEMS)</p>
                                </p>
                            </div>

                        </div>


                        {/* work experience */}

                        <div className={styles.experience}>
                            <span>WORK EXPERIENCE</span>

                            <div className={styles.edulist}>
                                <img src={Ellipse} alt='ellipse'></img>

                                <p style={{ marginBottom: '5px' }}>
                                    <p><span className={styles.strong}>QUALITY ANALYST</span> | OCT, 2019 - DEC, 2019</p>
                                    <p className={styles.subTitle}>TULIPS TECHNOLOGY</p>

                                    <li>
                                        Check the products listing.
                                </li>
                                    <li>
                                        Check the supplier's details
                                </li>
                                    <li >
                                        Update any information regarding the - products or the supplier's
                                </li>
                                    <li >
                                        Was responsible for maintaining the site and mobile app in 2 languages (Nepali and English)
                                </li>
                                    <li >
                                        Was responsible for ﬁnding faults and bugs in the dev server and live deployments (web + app)
                                </li>
                                </p>
                            </div>


                            <div className={styles.edulist}>
                                <img src={Ellipse} alt='ellipse'></img>

                                <p style={{ marginBottom: '5px' }}>
                                    <p><span className={styles.strong}>SUPERVISOR</span> | JUN, 2019 - JUL, 2019</p>
                                    <p className={styles.subTitle}>TOP ENTERPRISE</p>

                                    <li>
                                        Maintaining designated websites.
                                </li>
                                    <li>
                                        Supervising task to be done by a group of editors.
                                </li>
                                    <li>
                                        Update any information regarding the - products or the supplier's
                                </li>
                                    <li>
                                        Making sure task was handled correctly in the chain of command.
                                </li>

                                </p>
                            </div>

                            <div className={styles.edulist}>
                                <img src={Ellipse} alt='ellipse'></img>

                                <p style={{ marginBottom: '5px' }}>
                                    <p><span className={styles.strong}>QUALITY CHECKER</span> | JAN, 2019 - MAR, 2019</p>
                                    <p className={styles.subTitle}>CLOUD FACTORY</p>

                                    <li>
                                        Supervised 5 people
                                </li>
                                    <li >
                                        Trained more than 10 people on existing techniques and technologies
                                </li>
                                    <li >
                                        Responsible for handling delivery of projects
                                </li>
                                    <li >
                                        Checked the quality of the product before submission
                                </li>
                                    <li >
                                        Handling my team of 5 people to maximize output
                                </li>
                                </p>
                            </div>


                            <div className={styles.edulist}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" strokeWidth="3" />
                                </svg>

                                <p>
                                    <p><span className={styles.strong}>INTERN</span> | JAN, 2019 - MAR, 2019</p>
                                    <p className={styles.subTitle}>CROSSOVER NEPAL</p>

                                    <li>
                                        Studying & testing the in-house product.
                                </li>
                                    <li >
                                        Making design changes in the product
                                </li>
                                    <li >
                                        Managing documentation of the product.
                                </li>
                                    <li >
                                        Maintaining coherence among the test builds.
                                </li>
                                    <li >
                                        Building a prototype for company's new product line
                                </li>
                                </p>
                            </div>
                        </div>


                        {/* the end */}
                        <div className={styles.end}>
                            <img src={End} alt='end'></img>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default cv;