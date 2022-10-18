import classes from "./App.css";

import Header from "./Components/UI/Header";
import Hero from "./Components/UI/Hero";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
