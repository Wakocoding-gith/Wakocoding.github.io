import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  caption: string;
}

const GalleryCard: React.FC<Props> = ({ img, caption }) => {
  return (
    <figure className="relative">
      <Image src={img} alt="otags gallery" width={207} height={234} />
      <figcaption className="absolute bottom-0 left-0 rounded-md bg-green-primary p-2 text-[9px] text-gray-100">
        {caption}
      </figcaption>
    </figure>
  );
};

export default GalleryCard;
