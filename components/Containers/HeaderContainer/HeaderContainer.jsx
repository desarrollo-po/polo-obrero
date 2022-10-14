import styles from "./HeaderContainer.module.scss";

export default function HeaderContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
