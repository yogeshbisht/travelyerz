import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  centered?: Boolean;
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
    <section
      className={cn("relative py-16", {
        "bg-transparent": !bgImage,
        "bg-cover bg-center bg-no-repeat min-h-[600px]": !!bgImage,
      })}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
      }}
    >
      {bgImage && (
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-85" />
      )}
      <div className="max-container relative z-10">
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
