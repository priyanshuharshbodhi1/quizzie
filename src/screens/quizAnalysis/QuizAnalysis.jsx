import React from "react";
import styles from "./QuizAnalysis.module.css";

const QuizAnalysis = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.header}>Quiz 2 Question Analysis</div>
        <div className={styles.questionAnalysisContainer}>
          <div className={styles.question}>
            Q.1 Question place holder for analysis ?{" "}
          </div>
          <div className={styles.boxes}>
            <div className={styles.totalAttemptsBox}>
              <div>60</div>People Attempted the Question
            </div>
            <div className={styles.correctAttemptsBox}>
              <div>38</div>People Attempted Correctly
            </div>
            <div className={styles.incorrectAttemptsBox}>
              <div>22</div>People Attempted inCorrectly
            </div>
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
};

export default QuizAnalysis;
