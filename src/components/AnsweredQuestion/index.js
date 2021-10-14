import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const AnsweredQuestion = ({ user, optionOne, optionTwo, id }) => {
  const users = useSelector((state) => state.users.users);

  const author = users && users.find((u) => u.id === user);
  return (
    <div className={styles.question}>
      <div className={styles.question_header}>
        <h3>{author.name} asks ... </h3>
      </div>
      <div className={styles.question_wrapper}>
        <div className={styles.img}>
          <img src={author.avatarURL} alt="" />
        </div>
        <div className={styles.right}>
          <h4>would you rather ...?</h4>
          <div className={styles.options}>
            <p>{optionOne.text}</p>
            or
            <p>{optionTwo.text}</p>
          </div>
          <Link to={`/question/${id}`} className={styles.btn}>
            View Results
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnsweredQuestion;
