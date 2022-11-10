import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <p className={styles.header__logo}>Logo - FoodApp</p>
      <button className={styles.header__cart} onClick={props.onOpenCartModal}>
        <iconify-icon icon="ion:cart"></iconify-icon>
        <p>Your cart</p>
        <p className={styles.header__counter}>0</p>
      </button>
    </header>
  );
};

export default Header;
