import { useState } from "react";
import styles from "./imagegallery.module.css";
import nextIcon from "../../assets/images/icon-next.svg";
import previousIcon from "../../assets/images/icon-previous.svg";
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
  const [imageIndex, setImageIndex] = useState(0);

  function previousImage() {
    setImageIndex((prevValue) =>
      prevValue === 0 ? productImages.length - 1 : prevValue - 1
    );
  }

  function nextImage() {
    setImageIndex((prevValue) =>
      prevValue === productImages.length - 1 ? 0 : prevValue + 1
    );
  }

  return (
    <div className={styles.imageGalleryWrapper}>
      <button
        className={`${styles.button} ${styles.previous}`}
        onClick={previousImage}
      >
        <img src={previousIcon} className={styles.chevron} />
      </button>
      <button
        className={`${styles.button} ${styles.next}`}
        onClick={nextImage}
      >
        <img src={nextIcon} className={styles.chevron} />
      </button>
      <img
        src={productImages[imageIndex]}
        className={styles.productImage}
      />
      <div className={styles.thumbnailsWrapper}>
        {productThumbnailImages.map((image, i) => (
          <div
            key={i}
            className={
              i === imageIndex
                ? `${styles.thumbnailWrapper} ${styles.selectedWrapper}`
                : `${styles.thumbnailWrapper}`
            }
          >
            <img
              src={image}
              className={
                i === imageIndex
                  ? `${styles.thumbnailImage} ${styles.selectedThumbnail}`
                  : `${styles.thumbnailImage}`
              }
              onClick={() => setImageIndex(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
