import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="w-full">{children}</main>;
};

export default RootLayout;
