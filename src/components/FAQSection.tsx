import { useState, useEffect } from "react";

// Define the structure of FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Load FAQ data from the JSON file
  useEffect(() => {
    import("../data/faq.json")
      .then((data) => setFaqs(data.faqs))
      .catch((error) => console.error("Error loading FAQs:", error));
  }, []);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-black-800 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white-900"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`px-6 transition-all duration-200 ease-in-out ${
                openFaq === index ? "py-4" : "h-0 py-0 overflow-hidden"
              }`}
            >
              <p className="text-black-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
