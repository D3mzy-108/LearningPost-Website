import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/LandingPageComponents/Navbar";
import Footer from "@/components/LandingPageComponents/Footer";
import AnimatedBackground from "@/components/animated-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearningPost",
  description:
    "LearningPost is an innovative educational platform designed to provide personalized learning experiences for students of all ages. It offers a wide range of interactive lessons, resources, and tools to support academic learning and skill development across various subjects and topics. With features such as SmartLinks, challenges, leaderboards, and adaptive learning, LearningPost aims to make learning engaging, effective, and accessible for everyone. Whether you're a student, teacher, or parent, LearningPost serves as a comprehensive learning solution to help you achieve your educational goals and unlock your full potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full fixed top-0 left-0 backdrop-blur-lg z-5">
          <Navbar />
        </div>
        <AnimatedBackground />
        <div className="w-full absolute top-0 left-0 z-1">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
