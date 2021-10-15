import React from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const LeaderBoard = () => {
  const users = useSelector((state) => state.users.users);
  const questions = useSelector((state) => state.questions.questions);
  const sortedUsers = users.sort((a, b) =>
    Object.keys(a.answers).length + a.questions.length >
    Object.keys(b.answers).length + b.questions.length
      ? -1
      : Object.keys(b.answers).length + b.questions.length >
        Object.keys(a.answers).length + a.questions.length
      ? 1
      : 0
  );
  return (
    users &&
    questions && (
      <div className={styles.wrapper}>
        <Link className={styles.close} to="/">
          Close
        </Link>
        {sortedUsers.map((user, i) => (
          <div className={styles.flex} key={user.id}>
            <div
              className={styles.flag}
              style={
                i + 1 === 1
                  ? { background: "gold" }
                  : i + 1 === 2
                  ? { background: "silver" }
                  : { background: "#C77B30" }
              }
            >
              {i + 1 === 1
                ? "1st Place"
                : i + 1 === 2
                ? "2nd Place"
                : "3rd Place"}
            </div>
            <div className={styles.left}>
              <img src={user.avatarURL} alt="avatar" />
            </div>
            <div className={styles.middle}>
              <h2 className={styles.name}>{user.name}</h2>
              <p>answered questions {Object.keys(user.answers).length} </p>
              <p>created questions {user.questions.length}</p>
            </div>
            <div className={styles.right}>
              <p>score</p>
              <p>{Object.keys(user.answers).length + user.questions.length}</p>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default LeaderBoard;
