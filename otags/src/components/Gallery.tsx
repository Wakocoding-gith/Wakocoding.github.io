import { Galleryitems } from "@/constants";
import React from "react";
import GalleryCard from "./shared/GalleryCard";

const Gallery = () => {
  return (
    <section className="wrapper mt-24 bg-green-medium">
      <h1 className="font-bold text-5xl text-center">Gallery</h1>
      <p className="text-lg italic text-center my-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>

      <div className="flex-center gap-4">
        {Galleryitems.map((item, idx) => (
          <GalleryCard key={idx} img={item.img} caption={item.caption} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
