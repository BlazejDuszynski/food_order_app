import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);

  const removeOneItemFromCartHandler = (id) => {
    // const removedItemIndex = cartCtx.cartItems.findIndex(
    //   (cartItem) => cartItem.id === id
    // );
    // if (cartCtx.cartItems[removedItemIndex].amount <= 1) {
    //   cartCtx.cartItems.splice(removedItemIndex, 1);
    // } else {
    //   cartCtx.cartItems[removedItemIndex].amount = cartCtx.cartItems[removedItemIndex].amount - 1;
    // }
    // console.log(cartCtx.cartItems);
    cartCtx.removeItem(id);
  };

  const addOneItemToCartHandler = (cartIitem) => {
    cartCtx.addItem({ ...cartIitem, amount: 1 });
  };

  const itemsAddedToCart = cartCtx.cartItems.map((cartItem) => {
    return (
      <ul>
        <CartItem
          key={cartItem.id}
          title={cartItem.title}
          amount={cartItem.amount}
          price={cartItem.price}
          onAddItem={addOneItemToCartHandler.bind(null, cartItem)}
          onRemoveItem={removeOneItemFromCartHandler.bind(null, cartItem.id)}
        />
      </ul>
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
          {cartCtx.cartItems.length > 0 ? itemsAddedToCart : <p className={classes.message}>Your cart is empty.</p>}
          <div className={classes.cartItem + " " + classes.cartSummary}>
            <p>Total amount</p>
            <p>{cartCtx.totalAmount} PLN</p>
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
