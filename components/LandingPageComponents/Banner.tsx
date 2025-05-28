"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import DownloadButtons from "../DownloadButtons";

export default function Banner() {
  return (
    <section>
      <div
        className="w-full min-h-[100vh] lg:min-h-[100vh] grid place-items-center"
        style={{
          background: "linear-gradient(white, #FFFFFF80 25% 75%, white)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="w-full max-w-lg mx-auto text-center flex flex-col items-center">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-black font-bold"
            style={{
              lineHeight: "3.5rem",
            }}
          >
            Transform Your <br />
            <span className="text-blue-800">Learning Experience</span>
            <br />
            with
          </h1>
          <Image src={logo} alt="LearningPost Logo" height={75} />
          <p
            className="text-gray-600 text-xl md:text-2xl"
            style={{ fontStyle: "italic" }}
          >
            #where fun meets brain power
          </p>
          <div className="w-fit mt-5">
            <DownloadButtons buttonWidth={140.0} />
          </div>
        </div>
      </div>
    </section>
  );
}
