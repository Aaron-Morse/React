import { useState, useContext } from "react";
import { CartContext } from "../../App";
import styles from "./cart.module.css";
import cartIcon from "../../assets/images/icon-cart.svg";
import deleteIcon from "../../assets/images/icon-delete.svg";

export default function Cart() {
  const [showCart, setShowCart] = useState(false);

  const { cart, setCart } = useContext(CartContext);

  function populateCart() {
    return cart.map((item) => (
      <div key={item.sku} className={styles.itemWrapper}>
        <img src={item.image} className={styles.itemImage} />
        <div className={styles.itemDetails}>
          <p className={styles.itemTitle}>{item.title}</p>
          <p>
            ${item.price} x {item.quantity}{" "}
            <span className={styles.totalPrice}>
              ${item.price * item.quantity}
            </span>
          </p>
        </div>
        <button className={styles.delete} onClick={() => setCart([])}>
          <img src={deleteIcon} />
        </button>
      </div>
    ));
  }

  function CartModal() {
    return (
      <div className={styles.cartModal}>
        <p className={styles.title}>Cart</p>
        <div className={styles.cartContents}>
          {cart.length === 0 ? (
            <p className={styles.emptyCart}>Your cart is empty</p>
          ) : (
            <>
              {populateCart()}
              <button className={styles.checkout}>Checkout</button>
            </>
          )}
        </div>
      </div>
    );
  }

  console.log(cart);
  function toggleShowCart() {
    setShowCart((prevValue) => !prevValue);
  }

  return (
    <>
      <button className={styles.cartBtn} onClick={toggleShowCart}>
        <img src={cartIcon} />
      </button>
      {cart.length > 0 && (
        <div className={styles.cartBtnQuantity}>
          {cart.reduce((total, item) => total + item.quantity, 0)}
        </div>
      )}
      {showCart && <CartModal />}
    </>
  );
}
