import { useState, useContext } from "react";
import { CartContext } from "../../App";
import styles from "./cart.module.css";
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

  function toggleShowCart() {
    setShowCart((prevValue) => !prevValue);
  }

  return (
    <>
      <div className={styles.cartWrapper}>
        <button className={styles.cartBtn} onClick={toggleShowCart}>
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.cartIcon}
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
        </button>
        {cart.length > 0 && (
          <div className={styles.cartBtnQuantity}>
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </div>
        )}
      </div>
      {showCart && <CartModal />}
    </>
  );
}
