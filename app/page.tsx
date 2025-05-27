import AnimatedBackground from "@/components/animated-background";
import Banner from "@/components/LandingPageComponents/Banner";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="w-full absolute top-0 left-0 z-1">
        <Banner />
      </div>
    </>
  );
}
