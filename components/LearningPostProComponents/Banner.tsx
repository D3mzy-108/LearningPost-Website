"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import DownloadButtons from "../DownloadButtons";

export default function Banner() {
  return (
    <section>
      <div
        className="w-full min-h-[100vh] lg:min-h-[100vh] flex items-center"
        style={{
          background: "linear-gradient(white, #FFFFFF60 25% 75%, white)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center p-4 sm:p-6 md:p-36 space-y-4">
          {/* <Image src={logo} alt="LearningPost Logo" height={75} /> */}
          <h1 className="text-4xl text-black font-bold">
            LearningPost <span className="text-yellow-400 uppercase">Pro</span>{" "}
            Smart Learning for
            <br />
            <span className="text-blue-800">Smarter Institutions</span>
          </h1>
          <p
            className="text-gray-600 text-lg sm:text-xl"
            style={{ fontStyle: "italic" }}
          >
            Train, test, and empower your people. LearningPost Pro offers a
            fully scalable, AI-powered platform to onboard, upskill, and certify
            any team, anywhere.
          </p>
          <div className="w-fit mt-5">
            <DownloadButtons buttonWidth={140.0} />
          </div>
        </div>
      </div>
    </section>
  );
}
