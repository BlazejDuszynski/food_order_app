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
        <MenuItem />
      </Menu>
    </div>
  );
}

export default App;
