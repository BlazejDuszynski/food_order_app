import classes from "./MenuItemDescription.module.css";

const MenuItemDescription = (props) => {
  return (
    <div className={classes.description}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{`${props.price} PLN`}</p>
    </div>
  );
};

export default MenuItemDescription;
