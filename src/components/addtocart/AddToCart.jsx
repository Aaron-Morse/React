import { useState, useContext } from "react";
import { CartContext } from "../../App";
import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import carIcon from "../../assets/images/icon-cart.svg";
import styles from "./addtocart.module.css";

export default function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  function increment() {
    setQuantity((prevValue) => prevValue + 1);
  }

  function decrement() {
    if (quantity !== 1) {
      setQuantity((prevValue) => prevValue - 1);
    }
  }

  function addProductToCart() {
    let updateCart;
    if (cart.find((item) => item.sku === product.sku)) {
      updateCart = cart.map((item) => {
        return item.sku === product.sku
          ? { ...item, quantity: item.quantity + quantity }
          : item;
      });
    } else {
      updateCart = [...cart, { ...product, quantity }];
    }
    setCart(updateCart);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.quantitywrapper}>
        <button className={styles.button} onClick={decrement}>
          <img src={minusIcon} />
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.button} onClick={increment}>
          <img src={plusIcon} />
        </button>
      </div>
      <button className={styles.addtocart} onClick={addProductToCart}>
        Add to cart
      </button>
    </div>
  );
}
