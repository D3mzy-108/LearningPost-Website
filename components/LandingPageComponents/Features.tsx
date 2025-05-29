"use client";
import Image from "next/image";
import appScreenshot from "@/assets/images/app-screenshot.png";
import { useEffect, useState } from "react";

export default function Features() {
  const features = [
    {
      title: "Quests",
      subtitle:
        "Interactive modules with quizzes, activities, and assessments to guide learning, and SmartLinks to help delve into concepts deeper.",
    },
    {
      title: "Challenge",
      subtitle:
        "Test your knowledge and compete with friends in fun and interactive quizzes and competitions.",
    },
    {
      title: "Bookee",
      subtitle:
        "Access hundreds of books, magazines, and newspapers, and enhance your reading experience with text-to-speech features.",
    },
    {
      title: "Akada",
      subtitle:
        "Get personalized recommendations and support from our AI study companion to master tough concepts and reach your learning goals.",
    },
    {
      title: "SmartLinks",
      subtitle:
        "Tap to access supplementary materials and enriching explanations, allowing you to deep dive into any topic without interrupting your flow.",
    },
  ];
  const [displayIsBig, setDisplayIsBig] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth > 767;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setDisplayIsBig(window.innerWidth > 767);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <>
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Discover the magic of{" "}
              <span className="text-blue-800">Cool & Exciting</span> features!
            </h2>
          </div>

          <div className="w-full max-w-lg mx-auto mb-12">
            <p className="text-black/80">
              LearningPost is your key to unlocking a truly engaging and fun
              learning experience. We achieve this by focusing on five key
              features designed to make learning dynamic and enjoyable.
            </p>
          </div>

          <div className="w-full lg:max-w-5/6 mx-auto flex max-lg:flex-col items-center justify-center gap-6">
            <div className="w-full max-w-md relative">
              <Image
                src={appScreenshot}
                alt="App Screenshot"
                width={displayIsBig ? 360 : 250.0}
                className="mx-auto"
              />
            </div>
            <div className="w-full max-w-4xl">
              <ul className="grid grid-cols-1 gap-px">
                {features.map((feature, index) => {
                  return (
                    <li key={index} className={"w-full px-4 text-start"}>
                      <div className="w-full flex gap-4">
                        <div className="w-[20px] flex flex-col items-center">
                          <div className="w-full aspect-square rounded-full bg-black/90"></div>
                          <div className="w-[2px] bg-black/90 h-full"></div>
                        </div>
                        <div className="flex-1 w-full pb-6">
                          <span className="font-medium text-black text-lg">
                            {feature.title}
                          </span>
                          <p className="text-black/80 py-1">
                            {feature.subtitle}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
