import AboutLearningPostPro from "@/components/LearningPostProComponents/AboutLearningPostPro";
import Banner from "@/components/LearningPostProComponents/Banner";
import BookDemo from "@/components/LearningPostProComponents/BookDemo";
import KeyFeatures from "@/components/LearningPostProComponents/KeyFeatures";
import LearningPostProFunctions from "@/components/LearningPostProComponents/LearningPostProFunctions";

export default function LearningPostPro() {
  return (
    <>
      <div className="w-full min-h-screen">
        <Banner />
        <AboutLearningPostPro />
        <LearningPostProFunctions />
        <KeyFeatures />
        <BookDemo />
      </div>
    </>
  );
}
