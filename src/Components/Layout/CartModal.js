import React from "react";
import Card from "../UI/Card";
import classes from "./CartModal.module.css";

const CartModal = () => {
  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <Card className={classes.cartModal}>
        <div>
          <header className={classes.header}>Your cart</header>
          <ol>
            <li>
              <div>Sushi</div>
              <div>25,00 PLN</div>
            </li>
            <li>
              <div>Pizza</div>
              <div>25,00 PLN</div>
            </li>
          </ol>
          <div>
            <p>Total amount</p>
            <p>50,00 PLN</p>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default CartModal;
