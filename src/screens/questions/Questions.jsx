import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Questions.module.css";

const Question = () => {
  const [quiz, setQuiz] = useState(null);
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/quiz/${quizId}`)
      .then((response) => {
        setQuiz(response.data);
      })
      .catch((error) => console.error("Error fetching quiz:", error));
  }, [quizId]);

  const handleNext = () => {
    if (currentQuestionIndex === pollQuestionsCount - 1) {
      navigate("/quizcompleted");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  const pollQuestionsCount = Object.keys(quiz.questions[0].pollQuestion).length;
  console.log(pollQuestionsCount);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.questionContent}>
          <div className={styles.header}>
            <div className={styles.questionNumber}>
              {currentQuestionIndex + 1}/{pollQuestionsCount}
            </div>
            <div className={styles.timer}>00:00s {quiz.questions[0].timerType[currentQuestionIndex]}</div>
          </div>
          <div className={styles.pollQuestion}>
            {quiz.questions[0].pollQuestion[currentQuestionIndex]}
            {/* {quiz.questions.pollQuestion[currentQuestionIndex]} */}
          </div>
          <div className={styles.options}>
            {quiz.questions[0].options.map((option, index) => (
              <div key={index} className={styles.option}>
                {option.text} <img src={option.imageURL} alt="" />
              </div>
            ))}

            {/* {quiz.questions[currentQuestionIndex].options.map(
              (option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="option"
                    value={option._id} // Changed this line
                  />
                  <label htmlFor={`option${index}`}>{option._id}</label>
                </div>
              )
            )} */}
          </div>
          <button className={styles.nextBtn} onClick={handleNext}>
            {currentQuestionIndex === pollQuestionsCount - 1
              ? "Submit"
              : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Question;
