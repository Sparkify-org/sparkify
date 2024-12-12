import { cn } from "@/utils/twcn";
import React from "react";

interface SparkifyCardProps {
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLElement>["className"];
  nutral?: boolean;
}

const SparkifyCard: React.FC<SparkifyCardProps> = ({
  children,
  className,
  nutral = false,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        nutral &&
          "bg-foreground text-background before:absolute before:-z-10 before:w-full before:h-full before:border-2 before:border-foreground before:-bottom-2.5 before:-right-2.5",
        !nutral && "bg-background text-foreground border-2 border-foreground shadow-box-black-md dark:shadow-box-white-md",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SparkifyCard;
