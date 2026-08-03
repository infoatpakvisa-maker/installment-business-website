import Button from "../Button/Button";
import heroImage from "../../assets/hero2.jpeg";
function Hero() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fazal Electronics | Easy Installments in Rawalpindi
          </h1>

          <p className="mt-6 text-gray-600">
            We provide mobile phones, laptops, home appliances, and other
            electronics with simple installment plans and trusted customer
            service.
          </p>

          <div className="mt-8 flex gap-4">
            <Button>View Products</Button>

            <a
              href="https://wa.me/+923325280260"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-600 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <img
            src={heroImage}
            alt="Electronics Shop"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;