import React ,{useState}from 'react';
import './style.css';


const Faq = () => {
    const faqs = [
        {
          question: "How often should I visit the dentist?",
          answer: "We offer a variety of dental services including cleaning, whitening, braces, and cosmetic procedures.",
        },
        {
          question: "What can I expect during my first visit?",
          answer: "We are open from 9:00 AM to 6:00 PM, Monday to Saturday.",
        },
        {
          question: "How can I prepare for my dental appointment?",
          answer: "Yes, we accept most insurance plans. Contact us for specific details.",
        },
        {
          question: "What should I do in case of a dental emergency?",
          answer: "You can book an appointment through our website or by calling our clinic directly.",
        },
      ];
 return (
    <div className="faq-container">
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};
export default Faq;
