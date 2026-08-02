import { useState } from "react";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 font-semibold flex justify-between"
      >
        {question}
        <span>{open ? "-" : "+"}</span>
      </button>

      {open && (
        <div className="p-4 border-t">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQItem;