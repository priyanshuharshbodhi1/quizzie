import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import ImpressionsIcon from "../../assets/images/impressions.svg";

const Dashboard = () => {
  const [activeScreen, setActiveScreen] = useState("dashboard");

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.sideBar}>
          <div className={styles.logo}>QUIZZIE</div>
          <div className={styles.modesContainer}>
            <button
              className={`${styles.modeBtn} ${
                activeScreen === "dashboard" ? styles.activeScreen : ""
              }`}
              onClick={() => setActiveScreen("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`${styles.modeBtn} ${
                activeScreen === "analytics" ? styles.activeScreen : ""
              }`}
              onClick={() => setActiveScreen("analytics")}
            >
              Analytics
            </button>
            <button
              className={`${styles.modeBtn} ${
                activeScreen === "createQuiz" ? styles.activeScreen : ""
              }`}
              onClick={() => setActiveScreen("createQuiz")}
            >
              Create Quiz
            </button>
          </div>
          <hr />
          <button className={styles.logoutBtn}>LOGOUT</button>
        </div>
        <div className={styles.subContainer}>
          {activeScreen === "dashboard" && (
            <div className={styles.dashboardScreen}>
              <div className={styles.dashboardMainCard}>
                <div className={styles.totalQuiz}>{}Quiz Created</div>
                <div className={styles.totalQuestions}>{}Questions Created</div>
                <div className={styles.totalImpressions}>{}Impressions</div>
              </div>
              <div>
                <h2>Trending Quiz</h2>
                <div className={styles.trendingQuizCard}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className={styles.quizName}>Quiz 1</div>
                    <div className={styles.impressions}>667 </div>
                    <img src={ImpressionsIcon} alt="" />
                  </div>
                  <div className={styles.creationDate}>
                    Created on : 04 Sep, 2023
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeScreen === "analytics" && (
            <div className={styles.analyticsScreen}>
            </div>
          )}
          {activeScreen === "createQuiz" && (
            <div className={styles.createQuizScreen}>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
