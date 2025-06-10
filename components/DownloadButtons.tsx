"use client";
import playStoreButton from "@/assets/images/playstore-btn.png";
import appStoreButton from "@/assets/images/applestore-btn.png";
import Image from "next/image";
import Link from "next/link";

export default function DownloadButtons({
  buttonWidth,
}: {
  buttonWidth: number;
}) {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://play.google.com/store/apps/details?id=com.posthub.learningpost"
        target="_blank"
        aria-label="Download Android"
      >
        <Image
          src={playStoreButton}
          alt="Playstore"
          width={buttonWidth}
          height={buttonWidth / 3}
        />
      </Link>
      <div className="w-fit relative text-center">
        <button
          className="bg-transparent border-none outline-none opacity-50"
          aria-label="Download IOS"
          disabled
        >
          <Image
            src={appStoreButton}
            alt="App Store"
            width={buttonWidth}
            height={buttonWidth / 3}
          />
        </button>
        <div className="absolute -bottom-4 text-black/60 text-sm text-center w-full">
          Coming soon.
        </div>
      </div>
    </div>
  );
}
