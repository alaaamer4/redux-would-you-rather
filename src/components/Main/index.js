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
  const sortedUnansweredQuestions =
    questions &&
    questions.sort((a, b) =>
      a.timestamp > b.timestamp ? -1 : b.timestamp > a.timestamp ? 1 : 0
    );
  const sortedAnsweredQuestions =
    questions &&
    questions.sort((a, b) =>
      a.answeredAt > b.answeredAt ? -1 : b.answeredAt > a.answeredAt ? 1 : 0
    );
  useEffect(() => {
    dispatch(getQuestions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.questions_list}>
        <Minibar isAnswered={isAnswered} setIsAnswered={setIsAnswered} />
        {!isAnswered && questions && sortedUnansweredQuestions
          ? sortedUnansweredQuestions.map(
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
                      time={question.timestamp}
                    />
                  </div>
                )
            )
          : questions &&
            sortedAnsweredQuestions &&
            sortedAnsweredQuestions.map(
              (question) =>
                (question.optionOne.votes.includes(authUser) ||
                  question.optionTwo.votes.includes(authUser)) && (
                  <div key={question.id}>
                    <AnsweredQuestion
                      id={question.id}
                      user={question.author}
                      optionOne={question.optionOne}
                      optionTwo={question.optionTwo}
                      time={question.answeredAt}
                    />
                  </div>
                )
            )}
      </div>
    </div>
  );
};

export default Main;
