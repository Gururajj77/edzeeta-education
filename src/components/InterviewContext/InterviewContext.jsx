import styles from "./InterviewContext.module.css";

const InterviewContext = () => {
  return (
    <div>
      <div className={styles.interviewContextContainer}>
        <h1 className={styles.interviewContextTitle}>
          Why Choose Edzeeta for Your Interview Prep?
        </h1>
      </div>
      <div className={styles.boxesContainer}>
        <div className={styles.box}>
          <h1>Expert-Led Mock Interviews</h1>
          <p>
            At Edzeeta, our mock interviews are conducted by industry experts
            from top MNCs. This ensures that you receive feedback and guidance
            from professionals who understand the current trends and
            expectations in the job market.
          </p>
        </div>
        <div className={styles.box}>
          <h1>Personalized Feedback</h1>
          <p>
            Every candidate is unique, and so are their strengths and
            weaknesses. We provide personalized feedback tailored to your
            specific needs, helping you improve in areas where you need the most
            attention and building on your existing strengths.
          </p>
        </div>
        <div className={styles.box}>
          <h1>Real-World simulation</h1>
          <p>
            Our mock interviews are designed to simulate real-world interview
            scenarios. This means you get to practice in an environment that
            closely mirrors actual interview settings, helping you build
            confidence and reduce anxiety.
          </p>
        </div>
        <div className={styles.box}>
          <h1>Comprehensive Skill Development</h1>
          <p>
            Beyond just answering questions, our program focuses on developing a
            wide range of skills, including communication, problem-solving, and
            critical thinking. This holistic approach ensures you are
            well-prepared to impress any hiring manager.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterviewContext;
