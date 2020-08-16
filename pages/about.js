import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";

import Valorant from '../assets/valorant.png';
import LeagueOfLegend from '../assets/lol.png';
import Fifa from '../assets/fifa.png';

import styles from '../styles/pages/about.module.css'
import Link from 'next/link';

function about(props) {
    return (
        <Layout title='About | Miroz Devkota'>
            <Header />

            <div className={styles.container}>
                <p className={styles.about}>
                    About
                </p>

                <p className={styles.moviestext}>
                    I like to watch movies a lot of it i think.
                    But i am a picky movie watcher.
                    I mostly like to watch movies from countries like USA,
                    Korean, Tapanese, and Thailand.
                    I also like to watch animes. Some of my favorites
                    anime are Naruto, Death note, One Piece ...
                    I also play games ocassionally. I love League of Legend,
                    and games like Valorant and Fifa. Any competetive games
                    that i play with friends i tend to love it more.
                </p>

                <h1 className={styles.movies}>Movies</h1>
                <div className={styles.movieslistContainer}>
                    <div className={styles.leftside}>
                        <ul>
                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/434555-the-possession-of-hannah-grace' target='_blank'>The Possession of Hannah Grace</a>
                                </span>
                                <span className={styles.date}> (2018)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/394830-the-crucifixion' target='_blank'>The Crucifixion</a>
                                </span>
                                <span className={styles.date}> (2017)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/460019-truth-or-dare' target='_blank'>Truth or Dare</a>
                                </span>
                                <span className={styles.date}> (2018)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/419479-the-babysitter' target='_blank'>The Babysitter</a>
                                </span>
                                <span className={styles.date}> (2017)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>Extraction</a>
                                </span>
                                <span className={styles.date}> (2020)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/509967-6-underground' target='_blank'>6 Underground</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/547016-old-guard' target='_blank'>The Old Guard</a>
                                </span>
                                <span className={styles.date}> (2020)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>The Platform</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>John Wick: Chapter 3 - Parabellum</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>John Wick: Chapter 2</a>
                                </span>
                                <span className={styles.date}> (2017)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>Godzilla: King of the Monsters</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/531309-brightburn' target='_blank'>Brightburn</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>Pokémon Detective Pikachu</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>Spider-Man: Far from Home</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/535292-21-bridges' target='_blank'>21 Bridges</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.rightside}>
                        <ul>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/475557-joker' target='_blank'>Joker</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/516486-greyhound' target='_blank'>Greyhound</a>
                                </span>
                                <span className={styles.date}> (2020)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/640-catch-me-if-you-can' target='_blank'>Catch Me If You Can</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>
                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/522681-escape-room' target='_blank'>Escape Room</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/521029-annabelle-comes-home' target='_blank'>Annabelle Comes Home</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/439079-the-nun' target='_blank'>The Nun</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/514847-the-hunt' target='_blank'>The Hunt</a>
                                </span>
                                <span className={styles.date}> (2020)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/443791-underwater' target='_blank'>Underwater</a>
                                </span>
                                <span className={styles.date}> (2020)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>Hunter Killer</a>
                                </span>
                                <span className={styles.date}> (2018)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/539537-fantasy-island' target='_blank'>Fantasy Island</a>
                                </span>
                                <span className={styles.date}> (2020)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/567609-ready-or-not' target='_blank'>Ready or Not</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/501170-doctor-sleep' target='_blank'>Doctor Sleep</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/157433-pet-sematary' target='_blank'>Pet Sematary</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://www.themoviedb.org/movie/480414-the-children' target='_blank'>The Curse of La Llorona</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* anime list */}
                <h1 className={styles.movies}>Animes</h1>
                <div className={styles.movieslistContainer}>
                    <div className={styles.leftside}>
                        <ul>
                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/21/One_Piece' target='_blank'>One Piece</a>
                                </span>
                                <span className={styles.date}> (1999)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/20/Naruto' target='_blank'>Naruto</a>
                                </span>
                                <span className={styles.date}> (2002)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011' target='_blank'>Hunter x Hunter</a>
                                </span>
                                <span className={styles.date}> (2011)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood' target='_blank'>Fullmetal Alchemist: Brotherhood</a>
                                </span>
                                <span className={styles.date}> (2009)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/32281/Kimi_no_Na_wa' target='_blank'>Your Name</a>
                                </span>
                                <span className={styles.date}> (2016)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season' target='_blank'>Attack on Titan</a>
                                </span>
                                <span className={styles.date}> (2017)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/26243/Owari_no_Seraph' target='_blank'>Seraph of the End: Vampire Reign</a>
                                </span>
                                <span className={styles.date}> (2015)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/22319/Tokyo_Ghoul' target='_blank'>Tokyo Ghoul</a>
                                </span>
                                <span className={styles.date}> (2014)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/9919/Ao_no_Exorcist' target='_blank'>Blue Exorcist</a>
                                </span>
                                <span className={styles.date}> (2011)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/34572/Black_Clover' target='_blank'>Black Clover</a>
                                </span>
                                <span className={styles.date}> (2017)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/6702/Fairy_Tail' target='_blank'>Fairy Tail</a>
                                </span>
                                <span className={styles.date}> (2009)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/23755/Nanatsu_no_Taizai' target='_blank'>The Seven Deadly Sins</a>
                                </span>
                                <span className={styles.date}> (2014)</span>
                            </li>



                        </ul>
                    </div>

                    <div className={styles.rightside}>
                        <ul>

                            <li>
                                <span>
                                    <a href='Code Geass: Lelouch of the Rebellion R2' target='_blank'>Code Geass: Lelouch of the Rebellion R2</a>
                                </span>
                                <span className={styles.date}> (2008)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba' target='_blank'>Demon Slayer: Kimetsu no Yaiba</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/37520/Dororo' target='_blank'>Dororo</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>
                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/22319/Tokyo_Ghoul' target='_blank'>Tokyo Ghoul</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/40056/Deca-Dence' target='_blank'>Deca-Dence</a>
                                </span>
                                <span className={styles.date}> (2019)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/41353/The_God_of_High_School' target='_blank'>The God of High School</a>
                                </span>
                                <span className={styles.date}> (2020)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/40956/Enen_no_Shouboutai__Ni_no_Shou' target='_blank'>Fire Force</a>
                                </span>
                                <span className={styles.date}> (2020)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/40074/Gibiate' target='_blank'>Gibiate</a>
                                </span>
                                <span className={styles.date}> (2020)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu' target='_blank'>Re:ZERO -Starting Life in Another World-</a>
                                </span>
                                <span className={styles.date}> (2016)</span>
                            </li>

                            <li>
                                <span>
                                    <a href='https://myanimelist.net/anime/1535/Death_Note' target='_blank'>Death Note</a>
                                </span>
                                <span className={styles.date}> (2006)</span>
                            </li>

                        </ul>
                    </div>

                </div>


                <h1 className={styles.movies}>Games</h1>

                <div className={styles.gameslistContainer}>
                    <div className={styles.game}>
                        <div className={styles.imgContainer}>
                            <a href='https://playvalorant.com/en-us/' target='_blank'>
                                <img src={Valorant}></img>
                            </a>
                        </div>

                        <span>Valorant</span>
                    </div>


                    <div className={styles.game}>
                        <div className={styles.imgContainer}>
                            <a href='https://na.leagueoflegends.com/en-us/' target='_blank'>
                                <img src={LeagueOfLegend}></img>
                            </a>
                        </div>

                        <span>League of Legend</span>
                    </div>

                    <div className={styles.game}>
                        <div className={styles.imgContainer}>
                            <a href='https://www.ea.com/games/fifa/fifa-20' target='_blank'>
                                <img src={Fifa}></img>
                            </a>
                        </div>


                        <span>Fifa</span>
                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    );
}

export default about;