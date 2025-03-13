import Image from "next/image";
import React from "react";
import Subscribe from "./shared/Subscribe";

const Partners = () => {
  return (
    <section className="wrapper">
      <div className="flex-center flex-wrap">
        <Image
          src="/assets/wako-coding.png"
          alt="wakocoding"
          height={70}
          width={200}
        />
        <Image
          src="/assets/elite-youth-club.png"
          alt="elite youth club"
          height={90}
          width={120}
        />
        <Image
          src="/assets/transformers.png"
          alt="transformers"
          height={70}
          width={200}
        />
      </div>

      <div className="mt-24 flex-center flex-col w-[918px] mx-auto">
        <p className="text-3xl font-bold text-center">
          Subscribe to get more information, latest news and other interesting
          offers from OTAG{" "}
        </p>
        <Subscribe />
      </div>
    </section>
  );
};

export default Partners;
