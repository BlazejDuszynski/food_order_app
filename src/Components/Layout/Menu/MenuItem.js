import React, { useRef, useContext } from "react";
import CartContext from "../../../Store/cart-context";
import styles from "./MenuItem.module.css";
import MenuItemDescription from "./MenuItemDescription";

const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };
  const amountInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    addToCartHandler(enteredAmountNumber);
    amountInputRef.current.value = "1";
  };

  return (
    <div className={styles.menuItem}>
      <MenuItemDescription
        title={props.title}
        price={props.price}
        description={props.description}
      />
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={styles.upperPart}>
          <label>Amount</label>
          <input
            ref={amountInputRef}
            type="number"
            step="1"
            defaultValue="1"
            min="1"
            max="5"
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
