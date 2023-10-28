import React, { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import styles from "./PollCompletion.module.css";

const PollCompletion = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <FadeLoader color="#474444" />
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.thankYouContainer}>
        Thank you for participating in the Poll
      </div>
    </div>
  );
};

export default PollCompletion;
