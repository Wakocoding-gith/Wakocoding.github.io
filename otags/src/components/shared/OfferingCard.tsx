import Image from "next/image";
import React from "react";

const OfferingCard: React.FC<IOffering> = ({ img, details }) => {
  return (
    <article className="w-50 flex-center flex-col gap-5">
      <div className="w-25 h-25 bg-green-medium flex-center">
        <Image src={img} alt="Otags offer" width={60} height={64} />
      </div>

      <p className="text-sm font-normal text-center">{details}</p>
    </article>
  );
};

export default OfferingCard;
