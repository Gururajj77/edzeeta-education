import styles from "./Specialization.module.css";
const Specialization = () => {
  return (
    <div className={styles.prepContainer}>
      <div className={styles.prepContent}>
        <h1 className={styles.prepTitle}>Revolutionizing interview prep.</h1>
      </div>
      <div className={styles.subtitleWrapper}>
        <p className={styles.prepSubtitle}>
          Edzeeta is for everyone—from entry-level to executive level, for
          students and professionals. Ace your interview and land your dream
          job, internship, research position, or a specialized role in any field
          with Edzeeta.
        </p>
      </div>
      <div className={styles.gridContainer}>
        {[
          "Information Technology",
          "Core Engineering",
          "Healthcare",
          "University Admission",
          "Visa Interview Prep",
          "Sales & Marketing",
          "Behavioral & HR",
          "Management",
          "Banking & Finance",
          "Competitive Interviews",
          "Humanities",
        ].map((item, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.itemContent}>{item}</div>
          </div>
        ))}
        <div className={styles.gridItem}>
          <div className={styles.itemLastContent}>and many more Fields</div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
