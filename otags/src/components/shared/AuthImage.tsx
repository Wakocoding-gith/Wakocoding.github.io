"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const AuthImage = ({
  path,
  width,
  height,
}: {
  path: string;
  height: number;
  width: number;
}) => {
  const pathname = usePathname();

  return (
    <Image src={path} alt={pathname.slice(1)} height={height} width={width} />
  );
};

export default AuthImage;
