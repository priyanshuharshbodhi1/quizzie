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
  const [timer, setTimer] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);

    const isCorrect =
      quiz.questions[0].ansOption[currentQuestionIndex] === index; // Corrected typo
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = { userAnswer: index, isCorrect };
    setUserAnswers(newUserAnswers);
  };

  useEffect(() => {
    if (
      quiz &&
      quiz.quizType !== "Poll Type" &&
      quiz.questions[0].timerType[currentQuestionIndex] !== "OFF"
    ) {
      setTimer(parseInt(quiz.questions[0].timerType[currentQuestionIndex], 10));
      const countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(countdown);
            return 0;
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [currentQuestionIndex, quiz]);

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
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/api/quiz/${quizId}/impression`
        )
        .catch((error) => console.error("Error recording impression:", error));
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
                quiz.questions[0].timerType[currentQuestionIndex] !== "OFF" &&
                `${timer} Sec`}
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
                            ? styles.selectedOption
                            : ""
                        }`}
                        onClick={() => handleOptionClick(index)}
                      >
                        <div>
                          <img
                          className={styles.optionImage}
                            style={{
                              backgroundImage: `url(${option.imageURL})`,
                            }}
                            alt=""
                          />
                        </div>
                        <div>{option.text}</div>
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
