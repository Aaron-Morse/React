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

export default function ImageGallery({
  setShowModal,
  showModal,
  showInModal,
}) {
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

  function isDesktop() {
    return window.innerWidth >= 992;
  }

  return (
    <div
      className={
        showInModal
          ? `${styles.imageGalleryWrapper} ${styles.imageGalleryWrapperInModal}`
          : `${styles.imageGalleryWrapper}`
      }
    >
      <button
        className={
          showInModal
            ? `${styles.button} ${styles.previous} ${styles.previousModal}`
            : `${styles.button} ${styles.previous}`
        }
        onClick={previousImage}
      >
        <svg
          width="12"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        className={
          showInModal
            ? `${styles.button} ${styles.next} ${styles.nextModal}`
            : `${styles.button} ${styles.next}`
        }
        onClick={nextImage}
      >
        <svg
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <img
        onClick={() => {
          if (isDesktop() && showModal !== true) {
            setShowModal(true);
          }
        }}
        src={productImages[imageIndex]}
        className={styles.productImage}
      />
      <div
        className={
          showInModal
            ? `${styles.thumbnailsWrapper} ${styles.thumbnailsWrapperInModal}`
            : `${styles.thumbnailsWrapper}`
        }
      >
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
