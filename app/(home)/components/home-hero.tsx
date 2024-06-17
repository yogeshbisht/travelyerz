import SectionContainer from "@/components/shared/section-container";
import React from "react";

const HomeHero = () => {
  return (
    <SectionContainer
      bgImage="https://picsum.photos/1920/1080"
      highlight="Plan your trip with ease!"
      title="Explore the world with us"
      description="Book your dream vocation today and get exclusive offers!"
    >
      <div className="flex justify-center">
        <button className="btn btn-primary">Get Started</button>
      </div>
    </SectionContainer>
  );
};

export default HomeHero;
