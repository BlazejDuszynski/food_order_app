import React from "react";
import MenuItem from "./MenuItem";
import Card from "../../UI/Card";
import styles from "./Menu.module.css";

const availableMeals = [
  {
    id: "0",
    title: "Pizza",
    price: "24,99",
    description: "Tomato sauce, mushrooms, cheese, salami",
  },
  {
    id: "1",
    title: "Spaghetti",
    price: "17,99",
    description: "Pasta, meat, bologne sauce",
  },
  {
    id: "2",
    title: "Cheeseburger",
    price: "21,99",
    description: "Meat, cheese, tomato, onion, ketchup",
  },
  {
    id: "3",
    title: "Fish and Chips",
    price: "25,99",
    description: "Fish, chips, salad",
  },
  {
    id: "4",
    title: "Sushi",
    price: "32,99",
    description: "Futomaki, Hosomaki, Onigiri",
  },
];

const Menu = (props) => {
  const mealsList = availableMeals.map((availableMeal) => (
    <li className={styles.menuItem}>
      {
        <MenuItem
          id={availableMeal.id}
          title={availableMeal.title}
          price={availableMeal.price}
          description={availableMeal.description}
        />
      }
    </li>
  ));
  return (
    <Card>
      <ul className={styles.menu}>{mealsList}</ul>
    </Card>
  );
};

export default Menu;
