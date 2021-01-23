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
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt={movietitle}></img>
      </div>

      <div className={styles.description}>
        <p>{movietitle}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default OnTrigger;
