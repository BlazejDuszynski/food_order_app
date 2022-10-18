import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItem__description}>
        <h2>{props.title}</h2>
        <p>Tomato sauce, mushrooms, cheece, salami</p>
        <p>{`${props.price} PLN`}</p>
      </div>
      <button className={styles.button}>+</button>
    </div>
  );
};

export default MenuItem;
