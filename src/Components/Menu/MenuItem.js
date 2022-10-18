import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItem__description}>
        <h2>Pizza</h2>
        <p>Tomato sauce, mushrooms, cheece, salami</p>
        <p>12.99 PLN</p>
      </div>
      <div></div>
    </div>
  );
};

export default MenuItem;
