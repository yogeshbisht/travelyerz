import React from "react";
import Navbar from "@/components/navbar/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default HomeLayout;
