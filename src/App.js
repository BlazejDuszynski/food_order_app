import classes from "./App.css";
import { useState } from "react";

import CartModal from "./Components/Layout/CartModal";
import Header from "./Components/Layout/Header";
import Hero from "./Components/Layout/Hero";
import Menu from "./Components/Layout/Menu/Menu";

function App() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const closeCartModalHandler = () => {
    setIsCartModalOpen(false);
  };

  const openCartModalHandler = () => {
    setIsCartModalOpen(true);
  };

  return (
    <div className={classes.App}>
      <Header onOpenCartModal={openCartModalHandler} />
      <Hero />
      <Menu />
      {isCartModalOpen && (
        <CartModal onCloseCartModal={closeCartModalHandler} />
      )}
    </div>
  );
}

export default App;
