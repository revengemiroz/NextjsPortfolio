import React from "react";

import styles from "../../styles/components/_OnTrigger.module.css";

function OnTrigger({ img, description, movietitle }) {
  if (!description) {
    return (
      <div className={styles.imgContainer}>
        <img src={img} alt={movietitle}></img>
      </div>
    );
  }

  return (
    <div className={styles.moviesContainer}>
      <div className={styles.moviesImgContainer}>
        <img src={img} alt={movietitle}></img>
      </div>

      <div className={styles.moviesDescription}>
        <p className={styles.movieTitle}>{movietitle}</p>
        <p className={styles.movieDesc}>{description}</p>
      </div>
    </div>
  );
}

export default OnTrigger;
