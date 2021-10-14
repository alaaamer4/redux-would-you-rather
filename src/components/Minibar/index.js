import React from "react";

import styles from "./index.module.css";
const Minibar = ({ setIsAnswered, isAnswered }) => {
  return (
    <div className={styles.wrapper}>
      <button
        style={
          !isAnswered ? { background: "#3178c6" } : { background: "#24578d" }
        }
        className={styles.btn}
        onClick={() => {
          setIsAnswered(false);
        }}
      >
        Unanswered Questions
      </button>

      <button
        style={
          isAnswered ? { background: "#3178c6" } : { background: "#24578d" }
        }
        className={styles.btn}
        onClick={() => {
          setIsAnswered(true);
        }}
      >
        Answered Questions
      </button>
    </div>
  );
};

export default Minibar;
