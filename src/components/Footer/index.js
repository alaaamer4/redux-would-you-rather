import React from "react";
import styles from "./index.module.css";
const Footer = () => {
  return (
    <h4 className={styles.footer}>
      Redux Would you rather game &copy; mohamed Amer {new Date().getFullYear()}{" "}
    </h4>
  );
};

export default Footer;
