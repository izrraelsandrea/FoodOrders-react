import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/car-context";

const HeaderCartButton = props => {
    const [btnIsHighLigthed, setbtnIsHighLigthed] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const numberCartItem = items.reduce((curNumber, item) =>{
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighLigthed ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length ===0) {
            return;
        }
        setbtnIsHighLigthed(true);
        const timer = setTimeout(() => {
            setbtnIsHighLigthed(false);
        },300);

        return () => { //cleanup function
            clearTimeout(timer);
        };

    } , [items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
        <CartIcon />
        </span>
        <span>
        Your Cart
        </span>
        <span className={classes.badge}>{numberCartItem}</span>
    </button>
};
export default HeaderCartButton;