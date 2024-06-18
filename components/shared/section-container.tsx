import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  centered?: boolean;
  bgImage?: string;
  highlight?: string;
  title?: string;
  description?: string;
}

const SectionContainer = ({
  children,
  centered = false,
  bgImage,
  highlight,
  title,
  description,
}: SectionContainerProps) => {
  return (
    <section className="relative">
      {bgImage && (
        <div
          className="absolute -z-10 bg-cover bg-center bg-no-repeat h-full w-full top-0 left-0"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : "none",
          }}
        >
          <div className="absolute h-full w-full bg-black bg-opacity-85" />
        </div>
      )}
      <div className="max-container py-16">
        <div
          className={`flex flex-col justify-center max-w-lg mb-12 ${
            centered ? "items-center text-center mx-auto" : "items-start"
          }`}
        >
          {highlight && (
            <div
              className={cn("text-xl capitalize mb-2", {
                invert: bgImage,
              })}
            >
              {highlight}
            </div>
          )}
          {title && (
            <div className="text-brand text-4xl font-bold capitalize">
              {title}
            </div>
          )}
          {description && (
            <div className="text-muted-foreground italic mt-1">
              {description}
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
