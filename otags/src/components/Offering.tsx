import { Offerings } from "@/constants";
import React from "react";
import OfferingCard from "./shared/OfferingCard";

const Offering = () => {
  return (
    <section className="w-[1143px] py-6 mx-auto">
      <h1 className="text-4xl text-center font-bold w-[531px] mx-auto">
        We Believe We Can Solve All Tenement Related Issues
      </h1>

      <div className="flex-center gap-10 my-6">
        {Offerings.map((offer, idx) => (
          <OfferingCard img={offer.img} details={offer.details} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Offering;
