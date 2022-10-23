import classes from "./App.css";

import Header from "./Components/UI/Header";
import Hero from "./Components/UI/Hero";
import Menu from "./Components/Menu/Menu";
import MenuItem from "./Components/Menu/MenuItem";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Hero />
      <Menu>
        <MenuItem title="Pizza" price="24,99" description="Tomato sauce, mushrooms, cheece, salami" />
        <MenuItem title="Spaghetti" price="17,99" description="Pasta, meat, bologne sauce" />
        <MenuItem title="Cheeseburger" price="21,99" description="Meat, cheese, tomato, onion, keychup" />
        <MenuItem title="Fish and Chips" price="25,99" description="FIsh, chips, salad" />
        <MenuItem title="Sushi" price="32,99" description="Futomaki, Hosomaki, Onigiri" />
      </Menu>
    </div>
  );
}

export default App;
