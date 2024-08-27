import styles from "./MockInterview.module.css";

const MockInterview = () => {
  return (
    <div className={styles.prepContainer}>
      <div className={styles.prepContent}>
        <h1 className={styles.prepTitle}>Mock interviews always work</h1>
      </div>
      <div className={styles.subtitleWrapper}>
        <p className={styles.prepSubtitle}>
          We crafted Edzeeta to help you become awesome at interviewing, with
          the guidance of our elite industry experts across diverse fields like
          coding, engineering, medicine, sciences, humanities, and more... 🚀
        </p>
      </div>
    </div>
  );
};

export default MockInterview;
