import styles from '../styles/CV.module.css'
import ProfilePic from "../public/profilePic.gif";
import Facebook from "../assets/facebook.png";
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
import Git from "../assets/git.png";

import Line from "../assets/Line.png";
import Ellipse from "../assets/ellipse.svg";

import Experience from "../assets/Group 1.svg";
import End from "../assets/Group 2.svg";

import Link from 'next/link';

import Pdf from "../assets/pdf.png";


function cv(props) {
    return (

        <div className={styles.container}>

            <div className={styles.link}>
                <Link href='/cv.pdf' target='_self' download>
                    <img src={Pdf}></img>
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
                            <p>Web Developer, Javascript Stack</p>
                            <p>MERN Stack, GraphQL</p>
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
                        <span className={styles.header}>INTERESTS</span>

                        <div className={styles.collectionInterest}>
                            <div >
                                <div>
                                    <img src={Html}></img>
                                </div>
                                <span>HTML</span>
                            </div>

                            <div>
                                <div>
                                    <img src={Css}></img>
                                </div>
                                <span>CSS</span>
                            </div>

                            <div>
                                <div>
                                    <img src={Js}></img>
                                </div>
                                <span>JS</span>
                            </div>
                        </div>
                        <div className={styles.collectionInterest}>
                            <div>
                                <div>
                                    <img src={ReactJs}></img>
                                </div>
                                <span>React Js</span>
                            </div>

                            <div>
                                <div>
                                    <img src={Mongodb}></img>
                                </div>
                                <span>MongoDb</span>
                            </div>

                            <div>
                                <div>
                                    <img src={Figma}></img>
                                </div>
                                <span>Figma</span>
                            </div>

                        </div>

                        <div className={styles.collectionInterest}>
                            <div>
                                <div>
                                    <img src={Git}></img>
                                </div>
                                <span>Github</span>
                            </div>

                            <div>
                                <div>
                                    <img src={Git}></img>
                                </div>
                                <span>Github</span>
                            </div>

                            <div>
                                <div>
                                    <img src={Git}></img>
                                </div>
                                <span>Github</span>
                            </div>
                        </div>

                    </div>


                    <div className={styles.iLike}>
                        <span className={styles.header}>I LIKE</span>

                        <div className={styles.collection}>
                            <div>
                                <div>
                                    <img src={Football}></img>
                                </div>
                                <span>Football</span>
                            </div>

                            <div>
                                <div>
                                    <img src={Games}></img>
                                </div>
                                <span>Online Games</span>
                            </div>

                            <div>
                                <div>
                                    <img src={Video}></img>
                                </div>
                                <span>Movies</span>
                            </div>
                        </div>
                    </div>





                    <div className={styles.contacts}>
                        <span className={styles.header}>CONTACTS</span>

                        <div className={styles.list}>
                            <a href='https://www.youtube.com'>
                                <div className={styles.icons}>
                                    <img src={Facebook} />
                                </div>
                            </a>
                            <p>facebook.com/hotdude.miroj</p>
                        </div>

                        <div className={styles.list}>
                            <a href='https://www.youtube.com'>
                                <div className={styles.icons}>
                                    <img src={Github} />
                                </div>
                            </a>
                            <p>github.com/revengemiroz</p>
                        </div>

                        <div className={styles.list}>
                            <a href='https://www.youtube.com'>
                                <div className={styles.icons}>
                                    <img src={Email} />
                                </div>
                            </a>
                            <p>miroz.devkota@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className={styles.hr}>

                    <img src={Line}></img>
                </div>

                <div className={styles.rightside}>

                    <div className={styles.topexperience}>
                        <img src={Experience}></img>
                    </div>


                    {/* //Education */}

                    <div className={styles.education}>
                        <span>EDUCATION</span>

                        <div className={styles.edulist}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" strokeWidth="3" />
                            </svg>

                            <p>
                                <p><span className={styles.strong}>SLC</span>  ( GRADE 10 ) &nbsp;|&nbsp;  ~ DEC, 2011 A.D</p>

                                <p>Graded English Medium School (GEMS)</p>
                            </p>
                        </div>


                        <div className={styles.edulist}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" stroke-width="3" />
                            </svg>

                            <p>
                                <p><span className={styles.strong}>Intermediate</span>  ( + 2 ) &nbsp;|&nbsp;  ~ DEC, 2013 A.D</p>

                                <p>Prasadi Academy, HSEB</p>
                            </p>
                        </div>


                        <div className={styles.edulist}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" stroke-width="3" />
                            </svg>

                            <p>
                                <p><span className={styles.strong}>Bachelor's Degree</span> |  ~ FEB, 2019 A.D</p>
                                <p style={{ maxWidth: '380px' }}>Nepal College of Information Technology, B.E in Software Englineering</p>
                            </p>
                        </div>

                    </div>


                    {/* work experience */}

                    <div className={styles.experience}>
                        <span>WORK EXPERIENCE</span>

                        <div className={styles.edulist}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" stroke-width="3" />
                            </svg>

                            <p>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" stroke-width="3" />
                            </svg>

                            <p>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" stroke-width="3" />
                            </svg>

                            <p>
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
                                <circle cx="10" cy="10" r="8.5" fill="white" stroke="black" stroke-width="3" />
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
                        <img src={End}></img>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default cv;