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
      <form className={styles.form}>
        <div>
          <label>Amount</label>
          <input
            type="number"
            step="1"
            defaultValue="0"
            min="0"
            className={styles.input}
          ></input>
        </div>
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default MenuItem;
