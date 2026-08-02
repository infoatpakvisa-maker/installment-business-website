import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero/Hero";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import CTA from "../../components/CTA/CTA";
import InstallmentCalculator from "../../components/InstallmentCalculator/InstallmentCalculator";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <HowItWorks />
      <InstallmentCalculator />
      <CTA />
    </MainLayout>
  );
}

export default Home;