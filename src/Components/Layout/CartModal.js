import React from "react";
import Card from "../UI/Card";
import classes from "./CartModal.module.css";

const CartModal = () => {
  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <Card className={classes.cartModal}>
        <div>
          <header className={classes.header}>
            <p className={classes.header__text}>Your cart</p>
            <button className={classes.header__button}>X</button>
          </header>
          <ol>
            <li className={classes.cartItem}>
              <div>Sushi</div>
              <div>25,00 PLN</div>
            </li>
            <li className={classes.cartItem}>
              <div>Pizza</div>
              <div>25,00 PLN</div>
            </li>
          </ol>
          <div className={classes.cartItem + " " + classes.cartSummary}>
            <p>Total amount</p>
            <p>50,00 PLN</p>
          </div>
          <div className={classes.cartButtons}>
            <button
              className={
                classes.cartButtons__item + " " + classes.cartButtons__confirm
              }
            >
              Confirm
            </button>
            <button
              className={
                classes.cartButtons__item + " " + classes.cartButtons__cancel
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default CartModal;
