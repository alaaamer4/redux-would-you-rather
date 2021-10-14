import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <Link className={styles.close} to="/">
        Close
      </Link>
    </div>
  );
};

export default NotFound;
