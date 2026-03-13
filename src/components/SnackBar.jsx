import React from "react";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import styles from "./scss/SnackBar.module.scss";

function SnackBar({ isOpen, message, variant = "success" }) {
  const Icon = variant === "error" ? FiAlertCircle : FiCheckCircle;
  return (
    <div
      className={`${styles.snackBar} ${isOpen ? styles.active : ""} ${
        variant === "error" ? styles.error : ""
      }`}
    >
      <Icon style={{ marginRight: "5px" }} />
      {message}
    </div>
  );
}

export default SnackBar;
