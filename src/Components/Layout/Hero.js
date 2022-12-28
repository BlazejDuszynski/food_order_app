import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const clickHandler = (e) => {
    console.log(e.target);
  };

  return (
    <div className={styles.hero}>
      <h1 className={styles.hero__header}>It's time to order food!</h1>
      <p className={styles.hero__text}>
        Choose your favourite dish and let us deliver it to your door!
      </p>
    </div>
  );
};

export default Hero;
