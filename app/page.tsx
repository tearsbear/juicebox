import Image from "next/image";
import Button from "@/components/core/Buttons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-8 bg-black text-white">
      <div className="flex flex-col items-center w-full max-w-[478px] flex-grow mt-3 md:mt-0">
        {/* Logo */}
        <Image
          src="/images/logo.svg"
          alt="Juicebox logo"
          width={120}
          height={30}
          className="w-30 md:w-32 mb-8 md:mb-12"
          priority
        />

        {/* Hexagon illustration */}
        <div className="relative w-[100%] h-[290px] aspect-[478/290] mb-5 md:mb-10">
          <Image
            src="/images/vector/hexagon.png"
            alt="Hexagon illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Centered text */}
        <h1 className="mb-8 md:mb-12 text-2xl md:text-3xl font-bagoss max-w-[300px] md:max-w-[420px] text-center">
          Compare your thoughts on
          <span className="gradient-text"> technology </span> with current
          industry opinions.
        </h1>

        {/* Button */}
        <Link
          href="/walkthrough"
          className="w-full max-w-[90%] md:max-w-[350px]"
        >
          <Button variant="primary" className="w-full">
            Get a reality check
          </Button>
        </Link>
      </div>
    </div>
  );
}
