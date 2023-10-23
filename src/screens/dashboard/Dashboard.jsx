import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import ImpressionsIcon from "../../assets/images/impressions.svg";
import DeleteIcon from "../../assets/images/delete-icon.svg";
import EditIcon from "../../assets/images/edit-icon.svg";
import ShareIcon from "../../assets/images/share-icon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [activeScreen, setActiveScreen] = useState("dashboard");

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setShowQuizPublishedModal(false);
  };

  //for createQuiz Screen
  const [quizName, setQuizName] = useState("");
  const [quizType, setQuizType] = useState("");
  const handleCancelQuizModal = () => {
    setActiveScreen("dashboard");
  };

  const handleShowQuizQueModal = () => {
    if (quizName && quizType) {
      setShowQuestionModal(true);
      setActiveScreen("dashboard");
    } else {
      alert("Please fill in the Quiz Name and Quiz Type");
    }
  };

  const handleCreateQuiz = () => {
    setShowQuestionModal(false);
    setShowQuizPublishedModal(true);
    console.log("Creating quiz", questions);
  };

  //for question numbers
  const [questions, setQuestions] = useState([{ title: "" }]);

  const handleAddQuestion = () => {
    if (questions.length < 5) {
      setQuestions([...questions, { title: "" }]);
    }
  };

  const handleDeleteQuestion = (index) => {
    if (questions.length > 1) {
      const updatedQuestions = questions.filter((_, i) => i !== index);
      setQuestions(updatedQuestions);
    }
  };

  // const handleQuestionTitleChange = (e, index) => {
  //   const updatedQuestions = [...questions];
  //   updatedQuestions[index].title = e.target.value;
  //   setQuestions(updatedQuestions);
  // };

  //for questions and options
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [selectedOptionType, setSelectedOptionType] = useState(0);
  const [ansOption, setAnsOption] = useState(null);

  const handleRadioSelect = (index) => {
    setAnsOption(index);
  };

  const handleOptionTypeSelect = (index) => {
    setSelectedOptionType(index);
  };

  //for quiz published modal
  const [showQuizPublishedModal, setShowQuizPublishedModal] = useState(false);

  const notifyLinkCopied = () =>
    toast.success("Link copied to Clipboard", {
      position: "top-right",
      autoClose: 1400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
              <h1 className={styles.analyticsHeading}>Quiz Analytics</h1>
              <table className={styles.analyticsTable}>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Quiz Name</th>
                    <th>Created on</th>
                    <th>Impression</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Quiz 1</td>
                    <td>01 Sep, 2023</td>
                    <td>345</td>
                    <td>
                      <img src={EditIcon} alt="" />
                      <img src={DeleteIcon} alt="" onClick={handleDelete} />
                      <img src={ShareIcon} alt="" onClick={notifyLinkCopied} />
                    </td>
                    <td>Question Wise Analysis</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Quiz 2</td>
                    <td>04 Sep, 2023</td>
                    <td>667</td>
                    <td>
                      <img src={EditIcon} alt="" />
                      <img src={DeleteIcon} alt="" onClick={handleDelete} />
                      <img src={ShareIcon} alt="" onClick={notifyLinkCopied} />
                    </td>
                    <td>Question Wise Analysis</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Quiz 3</td>
                    <td>06 Sep, 2023</td>
                    <td>1.6K</td>
                    <td>
                      <img src={EditIcon} alt="" />
                      <img src={DeleteIcon} alt="" onClick={handleDelete} />
                      <img src={ShareIcon} alt="" onClick={notifyLinkCopied} />
                    </td>
                    <td>Question Wise Analysis</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Quiz 4</td>
                    <td>09 Sep, 2023</td>
                    <td>789</td>
                    <td>
                      <img src={EditIcon} alt="" />
                      <img src={DeleteIcon} alt="" onClick={handleDelete} />
                      <img src={ShareIcon} alt="" onClick={notifyLinkCopied} />
                    </td>
                    <td>Question Wise Analysis</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Quiz 5</td>
                    <td>11 Sep, 2023</td>
                    <td>995</td>
                    <td>
                      <img src={EditIcon} alt="" />
                      <img src={DeleteIcon} alt="" onClick={handleDelete} />
                      <img src={ShareIcon} alt="" onClick={notifyLinkCopied} />
                    </td>
                    <td>Question Wise Analysis</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Quiz 6</td>
                    <td>13 Sep, 2023</td>
                    <td>2.5K</td>
                    <td>
                      <img src={EditIcon} alt="" />
                      <img src={DeleteIcon} alt="" onClick={handleDelete} />
                      <img src={ShareIcon} alt="" onClick={notifyLinkCopied} />
                    </td>
                    <td>Question Wise Analysis</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Quiz 7</td>
                    <td>14 Sep, 2023</td>
                    <td>231</td>
                    <td>
                      <img src={EditIcon} alt="" />
                      <img src={DeleteIcon} alt="" onClick={handleDelete} />
                      <img src={ShareIcon} alt="" onClick={notifyLinkCopied} />
                    </td>
                    <td>Question Wise Analysis</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Quiz 8</td>
                    <td>17 Sep, 2023</td>
                    <td>1.3K</td>
                    <td>
                      <img src={EditIcon} alt="" />
                      <img src={DeleteIcon} alt="" onClick={handleDelete} />
                      <img src={ShareIcon} alt="" onClick={notifyLinkCopied} />
                    </td>
                    <td>Question Wise Analysis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {/* {activeScreen === "createQuiz" && (
            <div className={styles.createQuizScreen}></div>
          )} */}
        </div>
        {showModal && (
          <div className={styles.modalOverlay} onClick={handleCancel}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalContent}>
                <p
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Are you sure you want to delete?
                </p>
                <div className={styles.buttonContainer}>
                  <button
                    onClick={handleConfirm}
                    className={styles.confirmDeleteModalButton}
                  >
                    Confirm Delete
                  </button>
                  <button
                    onClick={handleCancel}
                    className={styles.cancelModalButton}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeScreen === "createQuiz" && (
          <div className={styles.createQuizScreen}>
            <div className={styles.modalOverlay}>
              <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.modalQuizNameContent}>
                  <div>
                    <input
                      type="text"
                      placeholder="Quiz name"
                      value={quizName}
                      onChange={(e) => setQuizName(e.target.value)}
                      className={styles.modalQuizNameInput}
                    />
                  </div>
                  <div className={styles.modalQuizTypeContainer}>
                    <div>Quiz Type</div>
                    <label className={styles.modalLabel}>
                      <input
                        type="radio"
                        value="Q & A"
                        checked={quizType === "Q & A"}
                        onChange={() => setQuizType("Q & A")}
                        className={styles.modalRadio}
                      />
                      Q & A
                    </label>
                    <label className={styles.modalLabel}>
                      <input
                        type="radio"
                        value="Poll Type"
                        checked={quizType === "Poll Type"}
                        onChange={() => setQuizType("Poll Type")}
                        className={styles.modalRadio}
                      />
                      Poll Type
                    </label>
                  </div>
                  <div className={styles.buttonContainer}>
                    <button
                      onClick={handleCancelQuizModal}
                      className={styles.cancelModalButton}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleShowQuizQueModal}
                      className={styles.confirmQuizNameButton}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showQuestionModal && (
          <div
            className={styles.questionModalOverlay}
            onClick={handleCreateQuiz}
          >
            <div
              className={styles.questionModal}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalContent}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    {questions.map((question, index) => (
                      <div className={styles.questionNo} key={index}>
                        {index + 1}
                        {index !== 0 && (
                          <span
                            className={styles.crossBtn}
                            onClick={() => handleDeleteQuestion(index)}
                            style={{cursor: "pointer"}}
                          >
                            x
                          </span>
                        )}
                      </div>
                    ))}
                    {questions.length < 5 && (
                      <div
                        className={styles.addBtn}
                        onClick={handleAddQuestion}
                        style={{ cursor: "pointer" }}
                      >
                        +
                      </div>
                    )}
                  </div>
                  <p>Max 5 Questions</p>
                </div>
                <div className={styles.questionContent}>
                  <div>
                    <input
                      type="text"
                      placeholder="Poll Question"
                      className={styles.pollQuestion}
                    />
                  </div>

                  <div
                    className={styles.pollOptionType}
                    style={{ display: "flex" }}
                  >
                    <div>Option Type</div>
                    <label className={styles.modalLabel}>
                      <input
                        type="radio"
                        name="optionType"
                        checked={selectedOptionType === 0}
                        onChange={() => handleOptionTypeSelect(0)}
                      />
                      Text
                    </label>
                    <label className={styles.modalLabel}>
                      <input
                        type="radio"
                        name="optionType"
                        checked={selectedOptionType === 1}
                        onChange={() => handleOptionTypeSelect(1)}
                      />
                      Image URL
                    </label>
                    <label className={styles.modalLabel}>
                      <input
                        type="radio"
                        name="optionType"
                        checked={selectedOptionType === 2}
                        onChange={() => handleOptionTypeSelect(2)}
                      />
                      Text and Image URL
                    </label>
                  </div>
                  <div
                    className={styles.pollOptions}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {[0, 1, 2, 3].map((index) => (
                      <div className={styles.modalLabel} key={index}>
                        <input
                          type="radio"
                          name="correctOption"
                          // checked={selectedOptionType === index}
                          onChange={() => handleRadioSelect(index)}
                        />
                        {selectedOptionType === 0 && (
                          <input
                            type="text"
                            name="optionText"
                            placeholder="Option"
                            className={`${styles.optionInput} ${
                              ansOption === index ? styles.greenBackground : ""
                            } `}
                          />
                        )}
                        {selectedOptionType === 1 && (
                          <input
                            type="url"
                            name="optionImageURL"
                            placeholder="Option Image URL"
                            className={`${styles.optionInput} ${
                              ansOption === index ? styles.greenBackground : ""
                            } `}
                          />
                        )}
                        {selectedOptionType === 2 && (
                          <>
                            <input
                              type="text"
                              name="optionText"
                              placeholder="Option"
                              className={`${styles.optionInput} ${
                                ansOption === index
                                  ? styles.greenBackground
                                  : ""
                              } `}
                            />
                            <input
                              type="url"
                              name="optionImageURL"
                              placeholder="Option Image URL"
                              className={`${styles.optionInput} ${
                                ansOption === index
                                  ? styles.greenBackground
                                  : ""
                              }  `}
                            />
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className={styles.timerType} style={{ display: "flex" }}>
                    <div>Timer Type</div>
                    <label className={styles.modalLabel}>
                      <input type="radio" name="timerType" /> 5 Sec
                    </label>
                    <label className={styles.modalLabel}>
                      <input type="radio" name="timerType" />
                      10 Sec
                    </label>
                    <label className={styles.modalLabel}>
                      <input type="radio" name="timerType" /> OFF
                    </label>
                  </div>
                  <div className={styles.buttonContainer}>
                    <button
                      onClick={handleCreateQuiz}
                      className={styles.cancelModalButton}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCreateQuiz}
                      className={styles.confirmCreateQuizButton}
                    >
                      Create Quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showQuizPublishedModal && (
          <div className={styles.modalOverlay} onClick={handleCancel}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalContent}>
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Congrats your Quiz is <br />
                  Published!
                </p>
                <div className={styles.quizLink}>
                  https://quizzie.com/dashboard
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    // onClick={handleConfirm}
                    className={styles.shareLinkBtn}
                    onClick={notifyLinkCopied}
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
