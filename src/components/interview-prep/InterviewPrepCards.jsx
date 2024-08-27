import styles from "./InterviewPrepCards.module.css";
import mockinterviewone from "../../assets/mockinterviewone.svg";
import mockinterviewtwo from "../../assets/mockinterviewtwo.svg";
import mockinterviewthree from "../../assets/mockinterviewthree.svg";
import mockinterviewfour from "../../assets/mockinterviewfour.svg";

const InterviewPrepCards = () => {
  const cardsData = [
    {
      image: mockinterviewone,
      title: "Feedback",
      content:
        "Learn subtle mistakes that you make during an interview with the experts which otherwise would not be recognized.",
    },
    {
      image: mockinterviewtwo,
      title: "Beat interview anxiety",
      content:
        "You tick all the right boxes for the job but anxiety during the interview defeats you. Mock interviews help you overcome nervousness.",
    },
    {
      image: mockinterviewthree,
      title: "Replay your performance",
      content:
        "Watch the mock interview recording, work on your mistakes. Take another mock interview, if you're still not confident enough.",
    },
    {
      image: mockinterviewfour,
      title: "Develop intangible cross functional skills",
      content:
        "Practising with Edzeeta offers some intangible benefits like developing orthogonal skills.",
    },
  ];

  return (
    <div className={styles.cardContainer}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <img src={card.image} alt="" className={styles.cardImage} />
          <h3 className={styles.cardTitle}>{card.title}</h3>
          <p className={styles.cardContent}>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default InterviewPrepCards;
