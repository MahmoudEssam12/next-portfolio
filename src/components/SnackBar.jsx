import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import styles from "./scss/SnackBar.module.scss";
function SnackBar({ message, test }) {
  return (
    <div className={`${styles.snackBar} ${test ? styles.active : ""}`}>
      <FiCheckCircle style={{ marginRight: "5px" }} />
      {message}
    </div>
  );
}

export default SnackBar;
