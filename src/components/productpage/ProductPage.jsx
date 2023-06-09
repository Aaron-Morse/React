import { useState, memo } from "react";
import styles from "./productpage.module.css";
import ImageGallery from "../imagegallery/ImageGallery";
import Modal from "../modal/Modal";
import AddToCart from "../addtocart/AddToCart";
import product1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";

function ProductPage() {
  const [showModal, setShowModal] = useState(false);

  const product = {
    sku: 12345,
    brand: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: "125.00",
    msrp: "250.00",
    discount: "50",
    image: product1Thumbnail,
  };

  function ProductDetails() {
    return (
      <div className={styles.productDetailsWrapper}>
        <p className={styles.brand}>{product.brand}</p>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.discount}>{product.discount}%</span>
          <span className={styles.msrp}>${product.msrp}</span>
        </div>
        <AddToCart product={product} />
      </div>
    );
  }

  return (
    <main className={styles.wrapper}>
      <ImageGallery
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <ProductDetails />
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <ImageGallery
          showInModal={true}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      </Modal>
    </main>
  );
}

export default memo(ProductPage);
