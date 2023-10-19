import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.sideBar}>
          <div className={styles.logo}>QUIZZIE</div>
          <div className={styles.modesContainer}>
            <button className={styles.modeBtn}>Dashboard</button>
            <button className={styles.modeBtn}>Analytics</button>
            <button className={styles.modeBtn}>Create Quiz</button>
          </div>
          <hr />
          <button className={styles.logoutBtn}>LOGOUT</button>
        </div>
        <div className={styles.subContainer}></div>
      </div>
    </>
  );
};

export default Dashboard;
