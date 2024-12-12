import React from "react";
import { cn } from "@/utils/twcn";

interface FormLinkProps {
  type: string;
  placeholder: string;
  height?: string;
}

const FormLink: React.FC<FormLinkProps> = ({ type, placeholder, height }) => {
  return (
    <div className="relative mt-4">
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "peer relative z-10 border p-2 w-full text-foreground bg-background rounded-none outline-none focus:border-foreground focus:ring-0",
          height
        )}
      />
      <span
        className={cn(
          "absolute top-1 left-1 w-full h-full bg-background border border-foreground -z-10 rounded-none transition-all duration-300 peer-focus:bg-foreground peer-hover:bg-foreground peer-focus:translate-y-1"
        )}
      ></span>
    </div>
  );
};

export default FormLink;
