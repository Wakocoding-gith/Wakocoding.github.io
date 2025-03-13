import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="wrapper bg-green-primary mt-10">
      <div className="w-[805px] mx-auto flex justify-between py-24">
        <div>
          <Image src="/assets/logo.png" alt="otags" height={58} width={200} />
          <p className="text-sm font-medium w-[181px] mt-4 text-gray-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit
            amet
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-gray-50">Company</h1>
          <Link href="#" className="text-gray-50 text-sm font-medium">
            About
          </Link>
          <Link href="#" className="text-gray-50 text-sm font-medium">
            FAQ
          </Link>
          <Link href="#" className="text-gray-50 text-sm font-medium">
            Help
          </Link>
          <Link href="#" className="text-gray-50 text-sm font-medium">
            Careers
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-gray-50">Contact Us</h1>
          <Link
            href="tel:+2349012343456"
            className="text-gray-50 text-sm font-medium"
          >
            0901 234 3456
          </Link>
          <Link
            href="mailto:Loremipsumdolorsi@gmail.com"
            className="text-gray-50 text-sm font-medium"
          >
            Loremipsumdolorsi@gmail.com
          </Link>
          <Link
            href="mailto:Loremipsumdolorsi@gmail.com"
            className="text-gray-50 text-sm font-medium"
          >
            Loremipsumdolorsi@gmail.com
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-gray-50">Find Us</h1>
          <Link href="#" className="text-gray-50 text-sm font-medium">
            Facebook
          </Link>
          <Link href="#" className="text-gray-50 text-sm font-medium">
            Twitter
          </Link>
          <Link href="#" className="text-gray-50 text-sm font-medium">
            Instagram
          </Link>
        </div>
      </div>

      <div className="flex-center">
        <span className="text-center text-gray-50 font-semibold text-lg">
          All rights reserved@OTAG.com
        </span>
      </div>
    </section>
  );
};

export default Footer;
