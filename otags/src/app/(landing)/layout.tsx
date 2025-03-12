import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      {/* Header goes here*/}
      <main>{children}</main>
      {/* Footer goes here*/}
    </section>
  );
};

export default RootLayout;
