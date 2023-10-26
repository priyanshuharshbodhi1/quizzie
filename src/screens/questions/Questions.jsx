import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Questions.module.css";

const Question = () => {
  const [quiz, setQuiz] = useState(null);
  const { quizId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/quiz/${quizId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Quiz not found");
        }
        return response.json();
      })
      .then((data) => setQuiz(data))
      .catch((error) => {
        console.error("Error:", error);
        navigate("/item-not-found");
      });
  }, [quizId, navigate]);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.questionContent}>
          <div className={styles.header}>
            <div className={styles.questionNumber}>01/04</div>
            <div className={styles.timer}>00:00s</div>
          </div>
          <div className={styles.pollQuestion}>
            What is your name and where are you from?
          </div>
          <div className={styles.options}>
            <div className={styles.option}>
              Option1 <img src="" alt="" />
            </div>
            <div className={styles.option}>
              option2 <img src="" alt="" />
            </div>
            <div className={styles.option}>
              option3 <img src="" alt="" />
            </div>
            <div className={styles.option}>
              option4 <img src="" alt="" />
            </div>
          </div>
          <button className={styles.nextBtn}>NEXT</button>
        </div>
      </div>
    </>
  );
};

export default Question;
