import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const [btnLighted, setBtnLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );

  const buttonClasses = `${classes.button} ${btnLighted ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnLighted(true);
    const timer = setTimeout(() => {
      setBtnLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
