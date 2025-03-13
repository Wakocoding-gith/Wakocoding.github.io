import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const WhyOtags = () => {
  return (
    <section className="wrapper flex-center gap-6 px-24">
      <div className="h-[623px] flex-between relative">
        <Image
          src="/assets/profile.png"
          alt="otags profile"
          width={500}
          height={623}
        />
        <div className="absolute bottom-0 left-8 bg-gray-50 p-4 rounded-md w-[440px]">
          <FaQuoteLeft size={30} className="text-green-primary inline" />
          <p className="text-lg font-normal px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris magna
            aliqua. Ut enim ad minim veniam
          </p>

          <div className="flex justify-end">
            <FaQuoteRight size={30} className="text-green-primary relative" />
          </div>
          <div className="w-full flex justify-end mt-2">
            <Image
              src="/assets/sign.png"
              alt="otags"
              width={85}
              height={45}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-lg font-bold border-b-2 border-green-primary w-max">
          Why OTAGS?
        </h1>

        <p className="text-4xl font-bold text-green-primary">
          We Offer Seemless Tenement Management Service
        </p>

        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris magna aliqua. Ut enim ad minim veniam sed
          do eiusmod tempor incididunt ut labore et dolore
        </p>
        <p className="text-lg font-medium">
          Dolor sit amet, consectetur adipiscing elit, dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco{" "}
        </p>

        <Link href="#" className="btn-secondary w-max text-sm">
          Read more...
        </Link>
      </div>
    </section>
  );
};

export default WhyOtags;
