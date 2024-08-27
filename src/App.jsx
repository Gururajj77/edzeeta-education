import "./App.css";
import BookSlot from "./components/book-slot/BookSlot";
import BusinessConnect from "./components/business-connect/BusinessConnect";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import InterviewPrepCards from "./components/interview-prep/InterviewPrepCards";
import InterviewContext from "./components/InterviewContext/InterviewContext";
import Landing from "./components/landing/Landing";
import MockInterview from "./components/mock-interview/MockInterview";
import Specialization from "./components/specializaton/Specialization";
function App() {
  return (
    <div className="wrapper-container">
      <div className="main-container">
        <Header />
        <Hero />
        <Landing />
        <InterviewContext />
        <Specialization />
        <MockInterview />
        <InterviewPrepCards />
        <BookSlot />
        <BusinessConnect />
        <Footer />
      </div>
    </div>
  );
}

export default App;
