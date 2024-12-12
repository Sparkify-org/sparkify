import React from "react";
import { cn } from "@/utils/twcn";

interface LabelProps {
  title: string;
}

const Label: React.FC<LabelProps> = ({ title }) => {
  return (
    <div>
      <label
        className={cn(
          "lg:text-2xl relative p-3 lg:px-20 lg:py-4 text-md bg-foreground text-background",
          "after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:bg-background after:border after:border-foreground after:-z-10"
        )}
      >
        {title}
      </label>
    </div>
  );
};

export default Label;
