import React from "react";
import imgMeal from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Food Order App</h1>
        <HeaderCartButton onClick={props.onClickCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imgMeal} alt="A Table full of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
