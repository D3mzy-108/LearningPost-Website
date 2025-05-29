"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import Link from "next/link";

export const navLinks = () => {
  return [
    { href: "/learningpost-pro", text: "LearningPost Pro" },
    { href: "/our-story", text: "Our Story" },
    { href: "/faq", text: "FAQ" },
    { href: "/terms-and-conditions", text: "T&C" },
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "#contacts", text: "Contacts" },
  ];
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-white/10 pt-1
     px-0 md:pl-2 lg:pl-8 md:pr-6 lg:pr-12"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="p-1">
          <Image src={logo} alt="LearningPost Logo" height={70} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          {navLinks().map((navLink, index) => {
            return (
              <NavLink
                key={index}
                href={navLink.href}
                text={navLink.text}
                onClick={() => {}}
              />
            );
          })}
        </div>
        {/* BLANK SPACE TO ALIGN LINKS TO CENTER */}
        <div className="w-2"></div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-white border-t border-gray-200 py-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks().map((navLink, index) => {
              return (
                <NavLink
                  key={index}
                  href={navLink.href}
                  text={navLink.text}
                  onClick={() => setIsOpen(false)}
                />
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => onClick()}
      className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 rounded-md p-2"
    >
      {text}
    </Link>
  );
}
