import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero/Hero";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import CTA from "../../components/CTA/CTA";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <HowItWorks />
      <CTA />
    </MainLayout>
  );
}

export default Home;