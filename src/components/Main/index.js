import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "../../actions/questions";
import styles from "./index.module.css";
import Minibar from "../Minibar";
import UnAnsweredQuestion from "../UnAnsweredQuestion";
import AnsweredQuestion from "../AnsweredQuestion";
const Main = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const questions = useSelector((state) => state.questions.questions);
  const authUser = useSelector((state) => state.login.authUser.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.questions_list}>
        <Minibar isAnswered={isAnswered} setIsAnswered={setIsAnswered} />
        {!isAnswered && questions
          ? questions.map(
              (question) =>
                question &&
                !question.optionOne.votes.includes(authUser) &&
                !question.optionTwo.votes.includes(authUser) && (
                  <div key={question.id}>
                    <UnAnsweredQuestion
                      id={question.id}
                      user={question.author}
                      optionOne={question.optionOne}
                      optionTwo={question.optionTwo}
                    />
                  </div>
                )
            )
          : questions &&
            questions.map(
              (question) =>
                (question.optionOne.votes.includes(authUser) ||
                  question.optionTwo.votes.includes(authUser)) && (
                  <div key={question.id}>
                    <AnsweredQuestion
                      id={question.id}
                      user={question.author}
                      optionOne={question.optionOne}
                      optionTwo={question.optionTwo}
                    />
                  </div>
                )
            )}
      </div>
    </div>
  );
};

export default Main;
