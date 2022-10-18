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
        <MenuItem title="Pizza" price="24,99" />
        <MenuItem title="Spaghetti" price="17,99" />
        <MenuItem title="Cheeseburger" price="21,99" />
        <MenuItem title="Fish and Chips" price="25,99" />
        <MenuItem title="Sushi" price="32,99" />
      </Menu>
    </div>
  );
}

export default App;
