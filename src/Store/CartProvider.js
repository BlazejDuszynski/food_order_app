import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.cartItems.findIndex(
      (cartItem) => cartItem.id === action.item.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedCartItems;

    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedCartItems = state.cartItems.concat(action.item);
    }
    return {
      cartItems: updatedCartItems,
      totalAmount: +updatedTotalAmount.toFixed(2),
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (cartItem) => cartItem.id === action.id
    );

    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedCartItems;

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    if (existingCartItem.amount === 1) {
      updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.id
      );
    } else {
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    }
    return {
      cartItems: updatedCartItems,
      totalAmount: +updatedTotalAmount.toFixed(2),
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
