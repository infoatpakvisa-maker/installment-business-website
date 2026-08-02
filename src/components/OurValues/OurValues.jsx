import ValueCard from "../ValueCard/ValueCard";

const values = [
  "Honest Pricing",
  "Genuine Products",
  "Customer Support",
  "Transparent Installments",
];

function OurValues() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Values
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard key={index} title={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;