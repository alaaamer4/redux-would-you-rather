import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/logo.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
const index = ({ children }) => {
  return (
    <>
      <nav className={styles.navcontainer}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.links}>
            <Navbar />
          </div>
        </div>
      </nav>
      {children}
      <Footer />
    </>
  );
};

export default index;
