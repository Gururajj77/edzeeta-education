import styles from "./BookSlot.module.css";
import lifthand from "../../assets/lifthand.svg";
import standhat from "../../assets/standhat.svg";

const BookSlot = () => {
  const bookingLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSehUPDfRnf7mNFIw3O9nMl1t3yRYuJMgNsgV_qPejLvYyXciA/viewform";
  return (
    <div id="bookSlotSection" className={styles.prepContainer}>
      <div className={styles.prepContent}>
        <h1 className={styles.prepTitle}>Book Your Slot</h1>
      </div>
      <div className={styles.subtitleWrapper}>
        <p className={styles.prepSubtitle}>
          Invest in yourself today with mock interviews, bag a job tomorrow!
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src={lifthand}
            alt="Lift hand icon"
            className={styles.cardIcon}
          />
          <h2 className={styles.cardTitle}>2 Mock Interviews</h2>
          <p className={styles.cardPrice}>₹2,499 /-</p>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookButton}
          >
            Book Now
          </a>
        </div>
        <div className={styles.card}>
          <img
            src={standhat}
            alt="Stand hat icon"
            className={styles.cardIcon}
          />
          <h2 className={styles.cardTitle}>4 Mock Interviews</h2>
          <p className={styles.cardPrice}>₹4,499 /-</p>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookButton}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
