"use client";
import React, { useEffect, useState } from "react";
import { faq } from "@/utils/urls.json";

export default function FAQ() {
  const toggleQuestions = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target == null) return;
    //   var target = (e.target as HTMLElement).getAttribute("data-target");
    const sibling = (e.target as HTMLElement).nextSibling;
    if (sibling == null) return;

    const isHidden: boolean = (sibling as HTMLElement).classList.contains(
      "hidden"
    );
    if (isHidden) {
      (sibling as HTMLElement).classList.remove("hidden");
    } else {
      (sibling as HTMLElement).classList.add("hidden");
    }
  };
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const response = await fetch(faq);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data["faqs"] == null) {
          console.warn("FAQ data is null or empty.");
          return;
        }

        setQuestions(data["faqs"]);
      } catch (error) {
        console.error("Error fetching FAQ:", error);
      }
    };

    fetchFAQ();
  }, []);

  return (
    <>
      <section
        className="min-h-screen"
        style={{
          background: "linear-gradient(white, #FFFFFF80 25% 75%, white)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="max-w-6xl mx-auto pt-[20vh] pb-12">
          {/* Section Title */}
          <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-black mb-16 leading-tight">
            Frequently Asked Questions
          </h1>

          {/* FAQ */}
          <div className="w-full max-w-2xl mx-auto max-h-[70vh] overflow-auto bg-white/30 rounded-xl">
            <ul className="">
              {questions.map((question, index) => {
                return (
                  <li
                    key={index}
                    className="border-b border-b-gray-300 select-none"
                  >
                    <div
                      className="w-full p-4 text-lg font-medium flex items-center question cursor-pointer"
                      data-target={"answer" + index}
                      onClick={(e) => {
                        toggleQuestions(e);
                      }}
                    >
                      <div className="w-full flex-1 pr-2">
                        {question["question"]}
                      </div>
                      <div className="px-3 aspect-square bg-black text-white rounded-md grid place-items-center">
                        +
                      </div>
                    </div>
                    <div
                      className="px-4 pb-4 answers hidden"
                      id={"answer" + index}
                    >
                      <div className="w-full p-3 rounded-md bg-gray-100">
                        {question["answer"]}
                        Answer
                      </div>
                    </div>
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
