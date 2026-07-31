import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero/Hero";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

function Home() {
  return (
    <MainLayout>
      <Hero />

      <div className="bg-red-500 text-white p-8 text-center">
        TEST AFTER HERO
      </div>

      <WhyChooseUs />

      <FeaturedProducts />
    </MainLayout>
  );
}

export default Home;