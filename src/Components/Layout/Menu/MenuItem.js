import React, { useRef } from "react";
import styles from "./MenuItem.module.css";
import MenuItemDescription from "./MenuItemDescription";

const MenuItem = (props) => {
  const amountInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber);
  };

  return (
    <div className={styles.menuItem}>
      <MenuItemDescription
        title={props.title}
        price={props.price}
        description={props.description}
      />
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <label>Amount</label>
        <input
          ref={amountInputRef}
          type="number"
          step="1"
          defaultValue="0"
          min="0"
          max="5"
          className={styles.input}
        ></input>
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default MenuItem;
