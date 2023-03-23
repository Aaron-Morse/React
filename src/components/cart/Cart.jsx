import { useState, useContext } from "react";
import { ProductContext } from "../../App";
import styles from "./cart.module.css";
import cartIcon from "../../assets/images/icon-cart.svg";

export default function Cart() {
  const [showCart, setShowCart] = useState(false);

  const { products, setProducts } = useContext(ProductContext);

  function CartModal() {
    return (
      <div className={styles.cartModal}>
        <p className={styles.title}>Cart</p>
        <div className={styles.cartContents}>
          {products.length === 0 && (
            <p className={styles.emptyCart}>Your cart is empty</p>
          )}
        </div>
      </div>
    );
  }

  function toggleShowCart() {
    setShowCart((prevValue) => !prevValue);
  }

  return (
    <>
      <button className={styles.cartBtn} onClick={toggleShowCart}>
        <img src={cartIcon} />
      </button>
      {showCart && <CartModal />}
    </>
  );
}
