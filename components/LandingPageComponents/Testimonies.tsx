"use client";
import Image from "next/image";
import appScreenshot from "@/assets/images/app-screenshot.png";
import { useEffect, useState } from "react";

export default function Testimonies() {
  const testimonies = [
    {
      author: "Mrs Olamide M.",
      role: "Parent",
      testimony:
        "LearningPost has transformed my daughter's approach to studying. She actually enjoys learning now, and her grades have seen a significant boost!",
    },
    {
      author: "Emmanuella A.",
      role: "Student",
      testimony:
        "The quests and personalized feedback make even the toughest subjects engaging. It feels like playing a game, but I'm learning so much!",
    },
    {
      author: "Mr Adeyemi O.",
      role: "Teacher",
      testimony:
        "As an educator, I appreciate the platform's adaptability. The personalized pathways truly cater to individual learning styles, making my job easier and more effective.",
    },
  ];

  return (
    <>
      <section
        id="testimonies"
        className="py-16 md:py-24"
        style={{
          background: "linear-gradient(white, #FFFFFF80 25% 75%, white)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="w-full max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Every Learner is{" "}
              <span className="text-blue-800">Center Stage</span> features!
            </h2>
          </div>

          <div className="w-full overflow-auto pb-4">
            <ul className="w-full flex gap-4">
              {testimonies.map((testimony, index) => {
                return (
                  <li
                    key={index}
                    className="min-w-[300px] md:min-w-[400px] bg-gray-50 shadow-lg border border-gray-300 rounded-lg p-4 grid place-items-center place-content-center"
                  >
                    <p className="text-black/80 italic">
                      "{testimony.testimony}"
                    </p>
                    <p className="font-medium text-blue-600 text-lg mt-4">
                      {testimony.author}
                    </p>
                    <span className="text-black/60 text-sm">
                      {testimony.role}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
