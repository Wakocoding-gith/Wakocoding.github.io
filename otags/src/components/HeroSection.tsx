import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full relative">
      <Image
        src="/assets/hero-img.png"
        alt="otags hero"
        width={1440}
        height={824}
        className="w-full object-cover"
      />

      <div className="absolute top-40 left-24 rounded-2xl flex-center flex-col bg-black/50 w-[1156px] h-[456px]">
        <div className="w-[843px] mx-auto flex-center flex-col">
          <h1 className="text-[40px] font-bold text-gray-50 text-center px-6">
            Welcome to Ogun State Tenement Approvals Ground Rent System (OTAGS).
          </h1>
          <p className="text-gray-50 text-center px-6 mt-5 mb-24">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
          </p>

          <Link href="/sign-in" className="btn-secondary flex-center">
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
