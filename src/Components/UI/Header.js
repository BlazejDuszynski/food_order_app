import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header__logo}>Logo - FoodApp</p>
      <button></button>
    </header>
  );
};

export default Header;
