"use client";

import React from "react";
import { Navlinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Nav: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return path.endsWith(pathname);
  };

  return (
    <nav className="flex-between gap-6">
      {Navlinks.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          className={cn(
            `font-medium text-xl transition-all text-gray-100 hover:text-gray-50 px-4`,
            {
              "font-bold border-b-2 borde-b-gry-50 text-gray-50": isActive(
                link.path
              ),
            }
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
