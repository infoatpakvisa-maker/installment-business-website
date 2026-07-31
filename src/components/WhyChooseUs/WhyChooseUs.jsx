import {
  FaShieldAlt,
  FaMoneyBillWave,
  FaHandshake,
  FaHeadset,
  FaBolt,
  FaMobileAlt,
} from "react-icons/fa";

import FeatureCard from "../FeatureCard/FeatureCard";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Genuine Products",
    description: "100% original electronics from trusted brands.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Easy Installments",
    description: "Flexible monthly installment plans.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Approval",
    description: "Quick and simple approval process.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Service",
    description: "Honest pricing and transparent terms.",
  },
  {
    icon: <FaHeadset />,
    title: "Friendly Support",
    description: "Our team is ready to help you.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Latest Electronics",
    description: "Mobiles, laptops, and home appliances.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;