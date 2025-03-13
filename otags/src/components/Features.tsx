import { FeaturesDetails } from "@/constants";
import React from "react";
import FeatureCard from "./shared/FeatureCard";

const Features = () => {
  return (
    <section className="w-full py-20">
      <div className="w-[858px] mx-auto grid grid-cols-3 gap-6">
        {FeaturesDetails.map((details, idx) => (
          <FeatureCard
            title={details.title}
            img={details.img}
            desc={details.desc}
            link={details.link}
            key={details.title + idx}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
