import styles from "./Landing.module.css";

const Landing = () => {
  const scrollToBookSlot = () => {
    const bookSlotElement = document.getElementById("bookSlotSection");
    if (bookSlotElement) {
      bookSlotElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingContent}>
        <h1 className={styles.landingTitle}>
          Master your job interviews with Edzeeta, expert coaching and
          personalized mentorship.
        </h1>
        <button onClick={scrollToBookSlot} className={styles.landingButton}>
          Book a 1:1 Mock Interview{" "}
        </button>
      </div>
    </div>
  );
};

export default Landing;
