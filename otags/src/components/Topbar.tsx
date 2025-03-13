import Image from "next/image";
import React from "react";
import Nav from "./shared/Nav";
import Link from "next/link";

const Topbar = () => {
  return (
    <header className="navbar flex-between p-6">
      <Image
        src="/assets/logo.png"
        alt="otags"
        width={188}
        height={36}
        className="object-contain"
      />

      <Nav />

      <Link href="/sign-in" className="btn-secondary flex-center">
        Login/Signup
      </Link>
    </header>
  );
};

export default Topbar;
