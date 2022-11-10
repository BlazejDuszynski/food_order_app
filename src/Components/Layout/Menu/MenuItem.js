import React from "react";
import styles from "./MenuItem.module.css";
import MenuItemDescription from "./MenuItemDescription";

const MenuItem = (props) => {
  return (
    <div className={styles.menuItem}>
      <MenuItemDescription
        title={props.title}
        price={props.price}
        description={props.description}
      />
      <button className={styles.button}>+</button>
    </div>
  );
};

export default MenuItem;
