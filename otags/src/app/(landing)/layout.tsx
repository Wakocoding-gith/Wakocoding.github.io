import Topbar from "@/components/Topbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Topbar />
      <main>{children}</main>
      {/* Footer goes here*/}
    </section>
  );
};

export default RootLayout;
