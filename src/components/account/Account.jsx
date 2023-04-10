import styles from "./account.module.css";
import imageAvatar from "../../assets/images/image-avatar.png";

export default function Account() {
  return (
    <div className={styles.wrapper}>
      <img
        src={imageAvatar}
        className={styles.accountImage}
        alt="Account Avatar"
      />
    </div>
  );
}
