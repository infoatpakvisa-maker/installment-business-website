import FAQItem from "../FAQItem/FAQItem";
import faqs from "../../data/faq";

function FAQList() {
  return (
    <>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </>
  );
}

export default FAQList;