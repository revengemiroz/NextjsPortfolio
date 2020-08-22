import React from 'react';

import styles from "../../styles/components/_OnTrigger.module.css";

function OnTrigger({ children, img, description, movietitle }) {
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