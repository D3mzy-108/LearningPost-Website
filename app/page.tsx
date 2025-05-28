import Banner from "@/components/LandingPageComponents/Banner";
import Features from "@/components/LandingPageComponents/Features";
import InnovativeTools from "@/components/LandingPageComponents/InnovativeTools";
import PersonalizedLearning from "@/components/LandingPageComponents/PersonalizedLearning";
import Testimonies from "@/components/LandingPageComponents/Testimonies";

export default function Home() {
  return (
    <>
      <Banner />
      <InnovativeTools />
      <PersonalizedLearning />
      <Features />
      <Testimonies />
    </>
  );
}
