import React from 'react'
import styles from "./QuizCompletion.module.css"
import TrophyImage from "../../assets/images/trophy-image.png"

const QuizCompletion = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.thankYouContainer}>
          <div className={styles.headding}>Congrats Quiz is completed</div>
          <img src={TrophyImage} alt="" className={styles.trophyImage}/>
          <div className={styles.quizScore}>Your Score is <span className={styles.scoreColor}> 03/04</span></div>
        </div>
      </div>
  )
}

export default QuizCompletion