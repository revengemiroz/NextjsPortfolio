import React from "react";

import styles from "../../styles/components/_OnTrigger.module.css";

export const onProjectPageTrigger = ({ description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};
