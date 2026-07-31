import { FaMobileAlt, FaFileAlt, FaCheckCircle, FaGift } from "react-icons/fa";
import StepCard from "../StepCard/StepCard";

const steps = [
  {
    icon: <FaMobileAlt />,
    title: "Choose Product",
    description: "Browse our available mobiles, laptops and electronics.",
  },
  {
    icon: <FaFileAlt />,
    title: "Submit Documents",
    description: "Provide the required documents for verification.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Approval",
    description: "Our team reviews and approves your application.",
  },
  {
    icon: <FaGift />,
    title: "Take Your Product Home",
    description: "Receive your product after successful approval.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;