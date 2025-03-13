import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCard: React.FC<IFeatureCard> = ({ img, title, desc, link }) => {
  return (
    <article className="w-56 flex flex-col gap-5">
      <div className="flex gap-2 items-center">
        <div className="bg-green-medium size-10 flex-center">
          <Image src={img} alt={title} width={20} height={20} />
        </div>
        <h1 className="w-20 text-base font-bold">{title}</h1>
      </div>

      <p className="text-base font-normal">{desc}</p>

      <Link href={link}>Read more...</Link>
    </article>
  );
};

export default FeatureCard;
