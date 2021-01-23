import React from "react";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import styles from "../../styles/components/_OnTrigger.module.css";

export const OnProjectPageTrigger = ({ description }) => {
  if (!description) return null;

  return (
    <div className={styles.projectContainer}>
      <span class="fas fa-bookmark blackiconcolor"></span>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};
