import heroImage from "../../assets/heroImage.svg";
import styles from "./Hero.module.css";
import capgemini from "../../assets/company/capgemini.png";
import accenture from "../../assets/company/accenture.png";
import tcs from "../../assets/company/tcs.png";
import wipro from "../../assets/company/wipro.png";
import ibm from "../../assets/company/ibm.png";
import deloitte from "../../assets/company/deloitte.png";
import mahindra from "../../assets/company/mahindra.png";
const Hero = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Master Your Job Interviews with Edzeeta, Expert Coaching and
            Personalized Mentorship
          </h1>
          <p className={styles.heroSubtitle}>
            Tailored Solutions to Elevate Your Confidence & Land Your Dream Job.
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={heroImage}
              alt="Hero Image"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.heroSecondaryTitleContent}>
        <h1 className={styles.heroTitle}>
          87.96% of people come out of an interview hating themselves for not
          performing well. Be in the other 12.04% with Edzeeta.
        </h1>
      </div>
      <div className={styles.heroSecondaryTitleContent}>
        <h1 className={styles.heroTitle}>Mentors from Top MNCs</h1>
        <div className={styles.companyBanner}>
          <img src={deloitte} alt="deloitte" className={styles.companyLogo} />
          <img src={accenture} alt="accenture" className={styles.companyLogo} />
          <img src={tcs} alt="tcs" className={styles.companyLogo} />
          <img src={ibm} alt="ibm" className={styles.companyLogo} />
          <img src={mahindra} alt="mahindra" className={styles.companyLogo} />
          <img src={capgemini} alt="capgemini" className={styles.companyLogo} />
          <img src={wipro} alt="wipro" className={styles.companyLogo} />
        </div>
      </div>
    </>
  );
};

export default Hero;
