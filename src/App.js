import classes from "./App.css";
import { useState } from "react";

import CartModal from "./Components/Layout/CartModal";
import Header from "./Components/Layout/Header";
import Hero from "./Components/Layout/Hero";
import Menu from "./Components/Layout/Menu/Menu";
import MenuItem from "./Components/Layout/Menu/MenuItem";

function App() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const closeCartModalHandler = () => {
    setIsCartModalOpen(false);
  };

  const openCartModalHandler = () => {
    setIsCartModalOpen(true);
  }

  return (
    <div className={classes.App}>
      <Header onOpenCartModal={openCartModalHandler} />
      <Hero />
      <Menu>
        <MenuItem
          title="Pizza"
          price="24,99"
          description="Tomato sauce, mushrooms, cheese, salami"
        />
        <MenuItem
          title="Spaghetti"
          price="17,99"
          description="Pasta, meat, bologne sauce"
        />
        <MenuItem
          title="Cheeseburger"
          price="21,99"
          description="Meat, cheese, tomato, onion, ketchup"
        />
        <MenuItem
          title="Fish and Chips"
          price="25,99"
          description="FIsh, chips, salad"
        />
        <MenuItem
          title="Sushi"
          price="32,99"
          description="Futomaki, Hosomaki, Onigiri"
        />
      </Menu>
      {isCartModalOpen && (
        <CartModal onCloseCartModal={closeCartModalHandler} />
      )}
    </div>
  );
}

export default App;
