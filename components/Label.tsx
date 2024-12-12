import React from "react";
import { cn } from "@/utils/twcn";

interface LabelProps {
  title: string;
}

const Label: React.FC<LabelProps> = ({ title }) => {
  return (
    
      <h2
        className={cn(
          "lg:text-2xl relative p-3 lg:px-20 lg:py-4 text-md bg-foreground text-background w-fit my-16 mx-auto",
          "after:content-[''] after:absolute after:top-2.5 after:left-2.5 after:w-full after:h-full after:bg-background after:border-2 after:border-foreground after:-z-10"
        )}
      >
        {title}
      </h2>
    
  );
};

export default Label;
