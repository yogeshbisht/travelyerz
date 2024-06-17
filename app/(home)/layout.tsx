import React from "react";
import Navbar from "@/components/navbar/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="width-container">{children}</main>
    </>
  );
};

export default HomeLayout;
