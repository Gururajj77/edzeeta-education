import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerDescription}>
          <h2 className={styles.footerLogo}>Edzeeta</h2>
          <p>
            Experience online face-to-face mock interviews with Edzeeta&apos;s
            experts! Our program provides a stress-free, no-pressure environment
            that simulates real job interviews. Get ahead of the competition
            with personalized mentoring and feedback to ensure you&apos;re fully
            prepared and confident for any interview.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h3>Solutions</h3>
            <ul>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSehUPDfRnf7mNFIw3O9nMl1t3yRYuJMgNsgV_qPejLvYyXciA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Your Slot
                </a>
              </li>
              <li>
                <a href="#business">Business</a>
              </li>
              <li>
                <a href="#stories">Customer Stories</a>
              </li>
              <li>
                <a href="#universities">Universities</a>
              </li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3>Support</h3>
            <ul>
              <li>
                <a href="tel:+918073418832">+91 8073418832</a>
              </li>
              <li>
                <a href="mailto:info@edzeeta.com">info@edzeeta.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Edzeeta. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#facebook" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#youtube" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
