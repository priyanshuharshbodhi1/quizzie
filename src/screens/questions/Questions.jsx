import React from 'react'
import styles from "./Questions.module.css"

const question = () => {
  return (
    <>
    <div className={styles.mainContainer}>
        <div className={styles.questionContent}>
            <div className={styles.header}>
                <div className={styles.questionNumber}>01/04</div>
                <div className={styles.timer}>00:00s</div>
            </div>
            <div className={styles.pollQuestion}>What is your name and where are you from?</div>
            <div className={styles.options}>
                <div className={styles.option}>Option1 <img src="" alt="" /></div>
                <div className={styles.option}>option2 <img src="" alt="" /></div>
                <div className={styles.option}>option3 <img src="" alt="" /></div>
                <div className={styles.option}>option4 <img src="" alt="" /></div>
            </div>
            <button className={styles.nextBtn}>NEXT</button>
        </div>
    </div>
    </>
  )
}

export default question