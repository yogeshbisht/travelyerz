import React from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

const SectionHeading = ({ title, subtitle, center }: SectionHeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      {subtitle && (
        <div className="font-light text-muted-foreground">{subtitle}</div>
      )}
    </div>
  );
};

export default SectionHeading;
