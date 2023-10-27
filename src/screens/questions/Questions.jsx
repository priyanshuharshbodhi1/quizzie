import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Questions.module.css";

const Question = () => {
  const [quiz, setQuiz] = useState(null);
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);

    const isCorrect =
      quiz.questions[0].ansOptions[currentQuestionIndex] === index;
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = { userAnswer: index, isCorrect };
    setUserAnswers(newUserAnswers);
  };
  // console.log(userAnswers);

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
  // console.log(pollQuestionsCount);
  console.log(quiz.questions[0].options[currentQuestionIndex]);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.questionContent}>
          <div className={styles.header}>
            <div className={styles.questionNumber}>
              0{currentQuestionIndex + 1}/0{pollQuestionsCount}
            </div>
            <div className={styles.timer}>
              {quiz.quizType !== "Poll Type" &&
                quiz.questions[0].timerType[currentQuestionIndex]}
            </div>
          </div>
          <div className={styles.pollQuestion}>
            {quiz.questions[0].pollQuestion[currentQuestionIndex]}
          </div>
          <div className={styles.options}>
            {quiz &&
              quiz.questions &&
              quiz.questions[0] &&
              quiz.questions[0].options &&
              quiz.questions[0].options[currentQuestionIndex] &&
              quiz.questions[0].options[currentQuestionIndex].map(
                (option, index) => {
                  if (option && option.text.trim() !== "") {
                    return (
                      <div
                        key={index}
                        className={`${styles.option} ${
                          index === selectedOptionIndex
                            ? styles.borderColor
                            : ""
                        }`}
                        onClick={() => handleOptionClick(index)}
                      >
                        {option.text}
                      </div>
                    );
                  }
                  return null;
                }
              )}
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
