import React, { useRef, useState, useEffect } from 'react';
import ReactHover, { Trigger, Hover } from 'react-hover';

import windowsize from "../components/windowsize";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import OnTrigger from "../components/Trigger/OnTrigger";

import Valorant from '../assets/valorant.png';
import LeagueOfLegend from '../assets/lol.png';
import Fifa from '../assets/fifa.png';

import styles from '../styles/pages/about.module.css';

let optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 50,
    shiftY: -40
}

// const windowGlobal = typeof window !== 'undefined' && window

function about(props) {

    const [width, height] = windowsize()

    return (
        <Layout title='About | Miroz Devkota'>
            <Header />

            <div className={styles.containers}>
                <p className={styles.about}>
                    About

                </p>


                <p className={styles.moviestext}>
                    I am a Front End Developer based in Nepal, Kathmandu.
                    I enjoy implementing unique design and features for
                    the projects I undertake.
                    I also love the logic and structure that goes behind
                    the development process and always strive to write elegant
                    and efficient code whether it be HTML, CSS or REACT JS.
                    <br></br>
                    <br></br>
                    When I am not coding i like to watch movies.
                    Some of the regions that i watch movies from are
                    USA, Korean, Taiwanese, and Thailand.
                    Some of the movies that i really like are listed below
                    so give my list a try and see if you like some of them.
                </p>

                <h1 className={styles.movies}>Movies</h1>
                <div className={styles.movieslistContainer}>
                    <div className={styles.leftside}>
                        {width <= 650 ?

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
                            :
                            <ul>
                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/434555-the-possession-of-hannah-grace' target='_blank'>The Possession of Hannah Grace</a>
                                            </span>
                                            <span className={styles.date}> (2018)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/hDDb0H0uJp2wjoJBbBHbKlYRbug.jpg' movietitle='The Possession of Hannah Grace' description='When a cop who is just out of rehab takes the graveyard shift in a city hospital morgue, she faces a series of bizarre, violent events caused by an evil entity in one of the corpses.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>



                                </li>

                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/394830-the-crucifixion' target='_blank'>The Crucifixion</a>
                                            </span>
                                            <span className={styles.date}> (2017)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/yxTFHGcS0AJab3olU9BjABf5Ogx.jpg' movietitle='The Crucifixion' description='When a priest is jailed for the murder of a nun on whom he was performing an exorcism, an investigative journalist strives to determine whether he in fact murdered a mentally ill person, or if he lost the battle with a demonic presence.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/460019-truth-or-dare' target='_blank'>Truth or Dare</a>
                                            </span>
                                            <span className={styles.date}> (2018)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/ei2waWQAG8NP244WShIFgGu9IOu.jpg' movietitle='Truth or Dare' description='A harmless game of "Truth or Dare" among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/419479-the-babysitter' target='_blank'>The Babysitter</a>
                                            </span>
                                            <span className={styles.date}> (2017)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/86a7GRVRCwfl7wdI4QadyvKa6Zu.jpg' movietitle='The Babysitter' description='When Cole stays up past his bedtime, he discovers that his hot babysitter is part of a Satanic cult that will stop at nothing to keep him quiet.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>Extraction</a>
                                            </span>
                                            <span className={styles.date}> (2020)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg' movietitle='Extraction' description='Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/509967-6-underground' target='_blank'>6 Underground</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg' movietitle='6 Underground' description='After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/547016-old-guard' target='_blank'>The Old Guard</a>
                                            </span>
                                            <span className={styles.date}> (2020)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg' movietitle='The Old Guard' description='Four undying warriors whove secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>The Platform</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/8ZX18L5m6rH5viSYpRnTSbb9eXh.jpg' movietitle='The Platform' description='A vertical prison with one cell per level. Two people per cell. One only food platform and two minutes per day to feed from up to down. An endless nightmare trapped in The Hole.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>John Wick: Chapter 3 - Parabellum</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg' movietitle='John Wick: Chapter 3 - Parabellum' description='Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>John Wick: Chapter 2</a>
                                            </span>
                                            <span className={styles.date}> (2017)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg' movietitle='John Wick: Chapter 2' description='John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>Godzilla: King of the Monsters</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/pU3bnutJU91u3b4IeRPQTOP8jhV.jpg' movietitle='Godzilla: King of the Monsters' description='Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species, thought to be mere myths, rise again, they all vie for supremacy, leaving humanitys very existence hanging in the balance.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/531309-brightburn' target='_blank'>Brightburn</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/sJWwkYc9ajwnPRSkqj8Aue5JbKz.jpg' movietitle='Brightburn' description='What if a child from another world crash-landed on Earth, but instead of becoming a hero to mankind, he proved to be something far more sinister?'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>Pokémon Detective Pikachu</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg' movietitle='Pokémon Detective Pikachu' description='In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>Spider-Man: Far from Home</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg' movietitle='Spider-Man: Far from Home' description='Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/535292-21-bridges' target='_blank'>21 Bridges</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/b40ApfKDPoJYbWepUs7f09Y3fD.jpg' movietitle='21 Bridges' description='An embattled NYPD detective, is thrust into a citywide manhunt for a pair of cop killers after uncovering a massive and unexpected conspiracy. As the night unfolds, lines become blurred on who he is pursuing, and who is in pursuit of him.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>
                            </ul>
                        }
                    </div>

                    <div className={styles.rightside}>
                        {width <= 650 ?
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
                                    <span className={styles.date}> (2002)</span>
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
                                    <span className={styles.date}> (2018)</span>
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
                            :
                            <ul>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/475557-joker' target='_blank'>Joker</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' movietitle='Joker' description='During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>

                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/516486-greyhound' target='_blank'>Greyhound</a>
                                            </span>
                                            <span className={styles.date}> (2020)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/kjMbDciooTbJPofVXgAoFjfX8Of.jpg' movietitle='Greyhound' description='A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2. With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>

                                            <span>
                                                <a href='https://www.themoviedb.org/movie/640-catch-me-if-you-can' target='_blank'>Catch Me If You Can</a>
                                            </span>
                                            <span className={styles.date}> (2002)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg' movietitle='Catch Me If You Can' description='A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>
                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>

                                            <span>
                                                <a href='https://www.themoviedb.org/movie/522681-escape-room' target='_blank'>Escape Room</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg' movietitle='Escape Room' description='Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>

                                            <span>
                                                <a href='https://www.themoviedb.org/movie/521029-annabelle-comes-home' target='_blank'>Annabelle Comes Home</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/qWsHMrbg9DsBY3bCMk9jyYCRVRs.jpg' movietitle='Annabelle Comes Home' description='Determined to keep Annabelle from wreaking more havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their home, placing her “safely” behind sacred glass and enlisting a priest’s holy blessing. But an unholy night of horror awaits as Annabelle awakens the evil spirits in the room, who all set their sights on a new target—the Warrens ten-year-old daughter, Judy, and her friends.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/439079-the-nun' target='_blank'>The Nun</a>
                                            </span>
                                            <span className={styles.date}> (2018)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg' movietitle='The Nun' description='When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order’s unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of the same demonic nun that first terrorized audiences in “The Conjuring 2” as the abbey becomes a horrific battleground between the living and the damned.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/514847-the-hunt' target='_blank'>The Hunt</a>
                                            </span>
                                            <span className={styles.date}> (2020)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg' movietitle='The Hunt' description='Twelve strangers wake up in a clearing. They dont know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.'>
                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/443791-underwater' target='_blank'>Underwater</a>
                                            </span>
                                            <span className={styles.date}> (2020)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg' movietitle='Underwater' description='After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>
                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/545609-extraction' target='_blank'>Hunter Killer</a>
                                            </span>
                                            <span className={styles.date}> (2018)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/a0j18XNVhP4RcW3wXwsqT0kVoQm.jpg' movietitle='Hunter Killer' description='Captain Glass of the USS Arkansas discovers that a coup détat is taking place in Russia, so he and his crew join an elite group working on the ground to prevent a war.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/539537-fantasy-island' target='_blank'>Fantasy Island</a>
                                            </span>
                                            <span className={styles.date}> (2020)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/8ZMrZGGW65ePWIgRn1260nA1uUm.jpg' movietitle='Fantasy Island' description='A group of contest winners arrive at an island hotel to live out their dreams, only to find themselves trapped in nightmare scenarios.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/567609-ready-or-not' target='_blank'>Ready or Not</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/vOl6shtL0wknjaIs6JdKCpcHvg8.jpg' movietitle='Ready or Not' description='A brides wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/501170-doctor-sleep' target='_blank'>Doctor Sleep</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/p69QzIBbN06aTYqRRiCOY1emNBh.jpg' movietitle='Doctor Sleep' description='Still irrevocably scarred by the trauma he endured as a child at the Overlook, Dan Torrance has fought to find some semblance of peace. But that peace is shattered when he encounters Abra, a courageous teenager with her own powerful extrasensory gift, known as the shine. Instinctively recognising that Dan shares her power, Abra has sought him out, desperate for his help against the merciless Rose the Hat and her followers.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/157433-pet-sematary' target='_blank'>Pet Sematary</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg' movietitle='Pet Sematary' description='Dr. Louis Creed and his wife, Rachel, move from Boston to Ludlow, in rural Maine, with their two young children. Hidden in the woods near the new family home, Ellie, their eldest daughter, discovers a mysterious cemetery where the pets of community members are buried.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>

                                <li>
                                    <ReactHover options={optionsCursorTrueWithMargin}>
                                        <Trigger type='trigger'>
                                            <span>
                                                <a href='https://www.themoviedb.org/movie/480414-the-children' target='_blank'>The Curse of La Llorona</a>
                                            </span>
                                            <span className={styles.date}> (2019)</span>
                                        </Trigger>
                                        <Hover type='hover'>
                                            <OnTrigger img='https://image.tmdb.org/t/p/w220_and_h330_face/jhZlXSnFUpNiLAek9EkPrtLEWQI.jpg' movietitle='The Curse of La Llorona' description='A social worker dealing with the disappearance of two children fears for her own family after beginning the investigation.'>

                                            </OnTrigger>
                                        </Hover>
                                    </ReactHover>

                                </li>
                            </ul>
                        }
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