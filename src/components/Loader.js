import styles from "./scss/Loader.module.scss";

function Loader() {
  return <span className={styles.loader} role="status" aria-label="Loading" />;
}

export default Loader;
