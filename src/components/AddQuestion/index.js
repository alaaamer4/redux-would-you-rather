import React, { useState } from "react";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addQuestion } from "../../actions/questions";
const AddQuestion = () => {
  const history = useHistory();
  const authUser = useSelector((state) => state.login.authUser.id);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState({
    author: authUser,
    optionOneText: "",
    optionTwoText: "",
  });
  const handelChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addQuestion(question));
    history.push("/");
  };
  return (
    <div className={styles.question_page}>
      <div className={styles.new_question}>
        <h1>Create New Question</h1>
        <form className={styles.question_form} onSubmit={handelSubmit}>
          <h2>Would You Rather ... </h2>
          <input
            value={question.optionOneText}
            name="optionOneText"
            type="text"
            className={styles.input_field}
            placeholder="Option one"
            onChange={handelChange}
          />
          <div>OR</div>
          <input
            value={question.optionTwoText}
            name="optionTwoText"
            type="text"
            className={styles.input_field}
            placeholder="Option two"
            onChange={handelChange}
          />
          <button type="submit" className={styles.btn_block}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestion;
