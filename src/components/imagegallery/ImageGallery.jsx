import { useState } from "react";
import styles from "./imagegallery.module.css";
import next from "../../assets/images/icon-next.svg";
import previous from "../../assets/images/icon-previous.svg";
import product1 from "../../assets/images/image-product-1.jpg";
import product1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import product2 from "../../assets/images/image-product-2.jpg";
import product2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import product3 from "../../assets/images/image-product-3.jpg";
import product3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import product4 from "../../assets/images/image-product-4.jpg";
import product4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";

const productImages = [product1, product2, product3, product4];
const productThumbnailImages = [
  product1Thumbnail,
  product2Thumbnail,
  product3Thumbnail,
  product4Thumbnail,
];

export default function ImageGallery() {
  const [index, setIndex] = useState(0);

  function previousImage() {
    setIndex((prevValue) =>
      prevValue === 0 ? productImages.length - 1 : prevValue - 1
    );
  }

  function nextImage() {
    setIndex((prevValue) =>
      prevValue === productImages.length - 1 ? 0 : prevValue + 1
    );
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${styles.previous}`}
        onClick={previousImage}
      >
        <img src={previous} className={styles.chevron} />
      </button>
      <img src={productImages[index]} className={styles.product} />
      <button
        className={`${styles.button} ${styles.next}`}
        onClick={nextImage}
      >
        <img src={next} className={styles.chevron} />
      </button>
    </div>
  );
}
