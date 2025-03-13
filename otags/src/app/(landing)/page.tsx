import BecomeVolunteer from "@/components/BecomeVolunteer";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Offering from "@/components/Offering";
import Partners from "@/components/Partners";
import WhyOtags from "@/components/WhyOtags";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Offering />
      <WhyOtags />
      <BecomeVolunteer />
      <Gallery />
      <Partners />
    </>
  );
};

export default Home;
