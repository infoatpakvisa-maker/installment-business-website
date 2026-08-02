import MainLayout from "../../layouts/MainLayout";
import AboutHero from "../../components/AboutHero/AboutHero";
import OurStory from "../../components/OurStory/OurStory";
import MissionVision from "../../components/MissionVision/MissionVision";
import OurValues from "../../components/OurValues/OurValues";
import TrustSection from "../../components/TrustSection/TrustSection";
import CTA from "../../components/CTA/CTA";

function About() {
  return (
    <MainLayout>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurValues />
      <TrustSection />
      <CTA />
    </MainLayout>
  );
}

export default About;