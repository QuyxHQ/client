import { useState } from "react";

const FAQs = () => {
  const items = [
    {
      question: "Can I use a UI Kit for commercial projects?",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can I use a UI Kit for commercial projects?",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can I use a UI Kit for commercial projects?",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can I use a UI Kit for commercial projects?",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can I use a UI Kit for commercial projects?",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can I use a UI Kit for commercial projects?",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="faqs" id="faqs">
      <div className="header">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={`faq-${index}`} onClick={() => setSelectedIndex(index)}>
            <div>
              <h3>{item.question}</h3>
              <i className="h h-chevron-up" />
            </div>

            <p className={`${selectedIndex == index ? "d-block" : "d-none"}`}>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
