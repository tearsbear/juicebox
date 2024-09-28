import React from "react";
import Image from "next/image";
import Button from "@/components/core/Buttons";
import Link from "next/link";

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 bg-black text-white">
      {/* Logo */}
      <div className="w-full flex justify-center">
        <Image
          src="/images/logo.svg"
          alt="Juicebox logo"
          width={120}
          height={30}
          priority
        />
      </div>

      {/* Main content */}
      <main className="flex flex-col items-center text-center">
        <h1 className="mb-6 text-4xl font-bagoss">Success!</h1>
        <p className="mb-8 text-xl font-sohne max-w-2xl">
          Congratulations! You've successfully completed the onboarding process.
        </p>

        <Link href="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
      </main>

      {/* Empty footer for spacing */}
      <footer className="w-full h-8" />
    </div>
  );
}
