import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Card from "../UI/Card";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
  const modalCtx = useContext(CartContext);

  const cartCtx = modalCtx.cartItems.map((cartItem) => {
    return (
      <li className={classes.cartItem}>
        <div>Sushi</div>
        <div>25,00 PLN</div>
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onCloseCartModal}></div>
      <Card className={classes.cartModal}>
        <div>
          <header className={classes.header}>
            <p className={classes.header__text}>Your cart</p>
            <button
              className={classes.header__button}
              onClick={props.onCloseCartModal}
            >
              X
            </button>
          </header>
          <ul></ul>
          <div className={classes.cartItem + " " + classes.cartSummary}>
            <p>Total amount</p>
            <p>0,00 PLN</p>
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
              onClick={props.onCloseCartModal}
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
