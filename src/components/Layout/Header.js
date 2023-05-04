import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>OT Meals</h1>
        <HeaderCartButton onClick={props.onCartClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table of food" />
      </div>
    </>
  );
}
