import React, { useState } from "react";

const faqData = [
  {
    question: "What is Endurr?",
    answer:
      "Endurr is an online platform that connects people around the world to work out together through scheduled virtual gym sessions.",
  },
  {
    question: "How do I schedule a workout?",
    answer:
      "After signing up, go to your dashboard and select a date and time for your workout. You can choose to invite friends or join a public session.",
  },
  {
    question: "Do I need any equipment?",
    answer:
      "No. Most sessions are bodyweight-friendly, but you can bring any equipment you have if your session requires it.",
  },
  {
    question: "Is Endurr free?",
    answer:
      "Yes! The basic plan is free, but we also offer premium features like personalized workout plans and advanced tracking.",
  },
  {
    question: "Can I join a workout from my phone?",
    answer:
      "Absolutely! Endurr works on all devices with a browser and a camera, including smartphones, tablets, and laptops.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
