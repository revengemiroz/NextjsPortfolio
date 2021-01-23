import React from "react";
import ReactHover, { Trigger, Hover } from "react-hover";

import windowsize from "../components/windowsize";

import {
  movies_text,
  movies_left,
  movies_right,
  anime_left,
  anime_right,
  GAMES
} from "../Data/about";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import OnTrigger from "../components/Trigger/OnTrigger";

import Valorant from "../assets/valorant.png";
import LeagueOfLegend from "../assets/lol.png";
import Fifa from "../assets/fifa.png";

import styled from "../styles/pages/about.module.css";

let optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 50,
  shiftY: -40
};

// const windowGlobal = typeof window !== 'undefined' && window

const gameImg = (gameName) => {
  switch (gameName) {
    case "Valorant":
      return Valorant;
    case "League of Legend":
      return LeagueOfLegend;
    case "Fifa":
      return Fifa;
    default:
      return;
  }
};

function about(props) {
  const [width, _height] = windowsize();

  return (
    <Layout title="About | Miroz Devkota">
      <Header />

      <div className={styled.containers}>
        <p className={styled.about}>About</p>

        <p className={styled.moviestext}>
          {movies_text[1].data}
          <br></br>
          <br></br>
          {movies_text[2].data}
        </p>

        <h1 className={styled.movies}>Movies</h1>

        <div className={styled.movieslistContainer}>
          <div className={styled.leftside}>
            {/* full width of desktop */}
            {movies_left.map((movie) => (
              <li key={movie.id}>
                {width <= 650 ? (
                  <span>
                    <a href={movie.movie_link} target="_blank">
                      {movie.movie_name}
                    </a>
                  </span>
                ) : (
                  <ReactHover options={optionsCursorTrueWithMargin}>
                    <Trigger type="trigger">
                      <span>
                        <a href={movie.movie_link} target="_blank">
                          {movie.movie_name}
                        </a>
                      </span>
                    </Trigger>
                    <Hover type="hover">
                      <OnTrigger
                        img={movie.img_path}
                        movietitle={movie.movie_name}
                        description={movie.description}
                      ></OnTrigger>
                    </Hover>
                  </ReactHover>
                )}
              </li>
            ))}
          </div>

          <div className={styled.rightside}>
            {movies_right.map((movie) => (
              <li key={movie.id}>
                {width <= 650 ? (
                  <span>
                    <a href={movie.movie_link} target="_blank">
                      {movie.movie_name}
                    </a>
                  </span>
                ) : (
                  <ReactHover options={optionsCursorTrueWithMargin}>
                    <Trigger type="trigger">
                      <span>
                        <a href={movie.movie_link} target="_blank">
                          {movie.movie_name}
                        </a>
                      </span>
                    </Trigger>
                    <Hover type="hover">
                      <OnTrigger
                        img={movie.img_path}
                        movietitle={movie.movie_name}
                        description={movie.description}
                      ></OnTrigger>
                    </Hover>
                  </ReactHover>
                )}
              </li>
            ))}
          </div>
        </div>

        <h1 className={styled.movies}>Anime</h1>
        <div className={styled.movieslistContainer}>
          <div className={styled.leftside}>
            <ul>
              {anime_left.map((anime) => (
                <li key={anime.id}>
                  {width <= 650 ? (
                    <span>
                      <a href={anime.anime_link} target="_blank">
                        {anime.anime_name}
                      </a>
                    </span>
                  ) : (
                    <ReactHover options={optionsCursorTrueWithMargin}>
                      <Trigger type="trigger">
                        <span>
                          <a href={anime.anime_link} target="_blank">
                            {anime.anime_name}
                          </a>
                        </span>
                      </Trigger>
                      <Hover type="hover">
                        <OnTrigger
                          img={anime.img_path}
                          movietitle={anime.anime_name}
                          description={anime.description}
                        ></OnTrigger>
                      </Hover>
                    </ReactHover>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styled.rightside}>
            <ul>
              {anime_right.map((anime) => (
                <li key={anime.id}>
                  {width <= 650 ? (
                    <span>
                      <a href={anime.anime_link} target="_blank">
                        {anime.anime_name}
                      </a>
                    </span>
                  ) : (
                    <ReactHover options={optionsCursorTrueWithMargin}>
                      <Trigger type="trigger">
                        <span>
                          <a href={anime.anime_link} target="_blank">
                            {anime.anime_name}
                          </a>
                        </span>
                      </Trigger>
                      <Hover type="hover">
                        <OnTrigger
                          img={anime.img_path}
                          movietitle={anime.anime_name}
                          description={anime.description}
                        ></OnTrigger>
                      </Hover>
                    </ReactHover>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h1 className={styled.movies}>Games</h1>

        <div className={styled.gameslistContainer}>
          {GAMES.map((game) => (
            <div className={styled.game}>
              <div className={styled.imgContainer}>
                <a href={game.game_link} target="_blank">
                  <img src={gameImg(game.game_name)}></img>
                </a>
              </div>

              <span>{game.game_name}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

export default about;
