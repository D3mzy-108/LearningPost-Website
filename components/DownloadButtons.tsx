"use client";
import playStoreButton from "@/assets/images/playstore-btn.png";
import appStoreButton from "@/assets/images/applestore-btn.png";
import Image from "next/image";

export default function DownloadButtons({
  buttonWidth,
}: {
  buttonWidth: number;
}) {
  return (
    <div className="flex space-x-4">
      <button
        className="bg-transparent border-none outline-none"
        aria-label="Download Android"
        onClick={() => alert("Failed to redirect to app store")}
      >
        <Image
          src={playStoreButton}
          alt="Playstore"
          width={buttonWidth}
          height={buttonWidth / 3}
        />
      </button>
      <button
        className="bg-transparent border-none outline-none"
        aria-label="Download IOS"
        onClick={() => alert("Failed to redirect to app store")}
      >
        <Image
          src={appStoreButton}
          alt="App Store"
          width={buttonWidth}
          height={buttonWidth / 3}
        />
      </button>
    </div>
  );
}
