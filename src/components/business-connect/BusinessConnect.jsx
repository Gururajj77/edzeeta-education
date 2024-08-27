import styles from "./BusinessConnect.module.css";
import businessConnectIcon from "../../assets/businessconnect.svg";
import universityConnectIcon from "../../assets/universityconnect.svg";

const BusinessConnect = () => {
  return (
    <div className={styles.businessConnectContainer}>
      <h1 className={styles.mainTitle}>
        Edzeeta serves both academic institutions/EdTech and
        businesses/corporations
      </h1>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src={businessConnectIcon}
            alt="Business Connect"
            className={styles.cardIcon}
          />
          <h2 className={styles.cardTitle}>Your Hiring Partner</h2>
          <button className={styles.cardButton}>Business</button>
        </div>
        <div className={styles.card}>
          <img
            src={universityConnectIcon}
            alt="University Connect"
            className={styles.cardIcon}
          />
          <h2 className={styles.cardTitle}>Your Student Prep Partner</h2>
          <button className={styles.cardButton}>University</button>
        </div>
      </div>

      <p className={styles.closingText}>
        Transform your interview skills with Edzeeta&apos;s Interview Readiness
        Program. Our expert coaching and tailored mock interviews will equip you
        with the confidence and expertise to excel in any interview scenario.
        From mastering common questions to handling high-pressure situations,
        we&apos;re here to help you turn opportunities into successes.
      </p>
    </div>
  );
};

export default BusinessConnect;
