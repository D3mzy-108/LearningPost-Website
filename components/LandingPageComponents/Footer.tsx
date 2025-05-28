"use client";
import DownloadButtons from "../DownloadButtons";
import { navLinks } from "./Navbar";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-white">
        <div className="py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* DOWNLOAD ACTION */}
          <div className="w-full px-6">
            <div className="w-fit lg:mx-auto">
              <p className="text-lg md:text-xl text-black/60">
                Join the Community today!
              </p>
              <p className="text-2xl font-semibold text-black mt-1 mb-4">
                Download LearningPost
              </p>
              <DownloadButtons buttonWidth={130.0} />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="w-full px-6">
            <div className="w-fit lg:mx-auto">
              <h3 className="text-blue-600 text-lg font-semibold">
                Quick Links
              </h3>
              <ul className="p-0 m-0 text-md text-black/80 mt-2">
                {navLinks().map((navLink, index) => {
                  return (
                    <li key={index} className="">
                      <a href={navLink.href}>{navLink.text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* CONTACTS */}
          <div className="w-full px-6" id="contacts">
            <div className="w-fit lg:mx-auto">
              <h3 className="text-blue-600 text-lg font-semibold">
                Contact Us
              </h3>
              <p className="text-md text-black/60 mt-2">
                Email:{" "}
                <a
                  href="mailto:support@petropost.ng"
                  className="underline italic"
                >
                  support@petropost.ng
                </a>
              </p>
            </div>
          </div>
        </div>
        <p className="text-black/60 text-center py-1">
          &copy; {new Date().getFullYear()}, LearningPost
        </p>
      </footer>
    </>
  );
}
