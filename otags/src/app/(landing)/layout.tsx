import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Topbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default RootLayout;
