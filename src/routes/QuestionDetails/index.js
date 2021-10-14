import React, { useState } from "react";
import { answerQuestion } from "../../actions/questions";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
const UnAnsweredQuestion = () => {
  const [selected, setSelected] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const authedUser = useSelector((state) => state.login.authUser);
  const questions = useSelector((state) => state.questions.questions);
  const question = questions && questions.find((q) => q.id === id);
  const author =
    users && question && users.find((u) => u.id === question.author);
  const handelClick = (e) => {
    e.target.value && setSelected(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      answerQuestion({
        authedUser: authedUser.id,
        qid: question.id,
        answer: selected,
      })
    );
  };
  return question &&
    author &&
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id) ? (
    <div className={styles.question}>
      <div className={styles.question_header}>
        <h3>{author.name} asks ... </h3>
      </div>
      <form className={styles.question_wrapper} onSubmit={handelSubmit}>
        <div className={styles.img}>
          <img src={author.avatarURL} alt="avatar" />
        </div>
        <div className={styles.right}>
          <h2>would you rather ...?</h2>

          <label className={styles.container} onClick={handelClick}>
            {question.optionOne.text}
            <input type="radio" name="radio" value="optionOne" />
            <span className={styles.checkmark}></span>
          </label>
          <div style={{ margin: "1rem" }}>OR</div>
          <label className={styles.container} onClick={handelClick}>
            {question.optionTwo.text}
            <input type="radio" name="radio" value="optionTwo" />
            <span className={styles.checkmark}></span>
          </label>

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className={styles.question}>
      {console.log(
        question.optionOne.votes.length,
        question.optionTwo.votes.length
      )}
      <div style={{ textAlign: "center" }} className={styles.question_header}>
        <h2>Results</h2>
      </div>
      <form className={styles.question_wrapper} onSubmit={handelSubmit}>
        <div className={styles.img}>
          <img src={author.avatarURL} alt="avatar" />
        </div>
        <h4>{author.name} was asking ...</h4>
        <div className={styles.right}>
          <h3>would you rather ...?</h3>

          <div className={styles.card}>
            {question.optionOne.votes.includes(authedUser.id) && (
              <span className={styles.card_flag}>Your Vote</span>
            )}
            {question.optionOne.text}
            <progress
              id="file"
              value={question.optionOne.votes.length}
              className={styles.card_progress}
              max={
                question.optionOne.votes.length &&
                question.optionTwo.votes.length &&
                question.optionOne.votes.length +
                  question.optionTwo.votes.length
              }
            />
            <div>
              {question.optionOne.votes.length} of{" "}
              {question.optionOne.votes.length +
                question.optionTwo.votes.length}{" "}
              votes
            </div>
            <div>
              {Math.round(
                (question.optionOne.votes.length * 100) /
                  (question.optionOne.votes.length +
                    question.optionTwo.votes.length)
              )}{" "}
              %
            </div>
          </div>

          <div className={styles.card}>
            {question.optionTwo.votes.includes(authedUser.id) && (
              <span className={styles.card_flag}>Your Vote</span>
            )}
            {question.optionTwo.text}
            <progress
              id="file"
              value={question.optionTwo.votes.length}
              className={styles.card_progress}
              max={
                question.optionOne.votes.length &&
                question.optionTwo.votes.length &&
                question.optionOne.votes.length +
                  question.optionTwo.votes.length
              }
            />
            <div>
              {question.optionTwo.votes.length} of{" "}
              {question.optionOne.votes.length +
                question.optionTwo.votes.length}{" "}
              votes
            </div>
            <div>
              {Math.round(
                (question.optionTwo.votes.length * 100) /
                  (question.optionOne.votes.length +
                    question.optionTwo.votes.length)
              )}{" "}
              %
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UnAnsweredQuestion;
