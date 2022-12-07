import React, { useContext } from "react";
import styles from "./Header.module.css";
import CartContext from "../../Store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <header className={styles.header}>
      <p className={styles.header__logo}>Logo - FoodApp</p>
      <button className={styles.header__cart} onClick={props.onOpenCartModal}>
        <iconify-icon icon="ion:cart"></iconify-icon>
        <p>Your cart</p>
        <p className={styles.header__counter}>
          {cartCtx.cartItems.reduce((currentAmount, cartItem) => {
            return cartItem.amount + currentAmount;
          }, 0)}
        </p>
      </button>
    </header>
  );
};

export default Header;
