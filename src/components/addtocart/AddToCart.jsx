import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../App";
import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import carIcon from "../../assets/images/icon-cart.svg";
import styles from "./addtocart.module.css";

export default function AddToCart() {
  const [quantity, setQuantity] = useState(0);

  const { products, setProducts } = useContext(ProductContext);

  function increment() {
    setQuantity((prevValue) => prevValue + 1);
  }

  function decrement() {
    if (quantity !== 0) {
      setQuantity((prevValue) => prevValue - 1);
    }
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
      <button className={styles.addtocart}>Add to cart</button>
    </div>
  );
}
