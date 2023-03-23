import styles from "./account.module.css";
import imageAvatar from "../../assets/images/image-avatar.png";

export default function Account() {
  return <img src={imageAvatar} className={styles.accountImage} />;
}
