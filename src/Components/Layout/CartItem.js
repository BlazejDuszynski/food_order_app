import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const itemTotalPrice = props.price * props.amount;
  return (
    <li className={classes.cartItem}>
      <p className={classes.cartItem__title}>{props.title}</p>
      <div className={classes.amountManager}>
        <button
          className={classes.amountManager__button}
          onClick={props.onRemoveItem}
        >
          -
        </button>
        <p className={classes.amountManager__value}>{props.amount}</p>
        <button
          className={classes.amountManager__button}
          onClick={props.onAddItem}
        >
          +
        </button>
      </div>
      <p className={classes.cartItem__price}>{itemTotalPrice.toFixed(2)} PLN</p>
    </li>
  );
};

export default CartItem;
