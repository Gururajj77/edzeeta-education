import logoImage from "../../assets/logoImage.svg";
import styles from "./Header.module.css";

const Header = () => {
  const scrollToBookSlot = () => {
    const bookSlotElement = document.getElementById("bookSlotSection");
    if (bookSlotElement) {
      bookSlotElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logoImage} width={150} height={150} alt="Logo" />
      </div>
      <h1 className={styles.headerText}>Interview Readiness Programme</h1>
      <div className={styles.buttonContainer}>
        <button onClick={scrollToBookSlot} className={styles.headerButton}>
          Get started
        </button>
      </div>
    </header>
  );
};

export default Header;
