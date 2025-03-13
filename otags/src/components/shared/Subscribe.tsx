"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdMailOutline } from "react-icons/md";

const Subscribe = () => {
  return (
    <form action={() => console.log(FormData)} className="mt-6 space-x-4 flex">
      <div className="relative">
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-[525px] h-11 pl-10 placeholder:text-green-primary font-thin border-green-primary"
        />
        <MdMailOutline
          size={24}
          className="text-green-primary absolute top-2.5 left-3"
        />
      </div>
      <Button type="submit" className="btn-primary w-54 h-11">
        Subscribe
      </Button>
    </form>
  );
};

export default Subscribe;
