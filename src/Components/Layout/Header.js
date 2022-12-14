import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.css";
import CartContext from "../../Store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const { cartItems } = cartCtx;

  const cartItemsAmount = cartItems.reduce((currentAmount, cartItem) => {
    return cartItem.amount + currentAmount;
  }, 0);

  const [isBtnJumped, setIsBtnJumped] = useState(false);

  const btnClasses = `${classes.header__cart} ${
    isBtnJumped ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setIsBtnJumped(true);

    const timer = setTimeout(() => {
      setIsBtnJumped(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <header className={classes.header}>
      <p className={classes.header__logo}>Logo - FoodApp</p>
      <button className={btnClasses} onClick={props.onOpenCartModal}>
        <iconify-icon icon="ion:cart"></iconify-icon>
        <p>Your cart</p>
        <p className={classes.header__counter}>{cartItemsAmount}</p>
      </button>
    </header>
  );
};

export default Header;
