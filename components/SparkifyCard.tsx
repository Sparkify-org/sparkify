import { cn } from "@/utils/twcn";
import { motion } from "motion/react";
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
    <motion.div
      initial={{
        translateX: "10px",
        translateY: "10px",
        boxShadow: "none",
      }}
      whileInView={{
        translateX: "0",
        translateY: "0",
        boxShadow: "10px 10px 0 0 var(--foreground)",
      }}
      viewport={{
        amount: 1,
        margin: "0px 0px -40% 0px",
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative overflow-hidden",
        nutral &&
          "bg-foreground text-background before:absolute before:-z-10 before:w-full before:h-full before:border-2 before:border-foreground before:-bottom-2.5 before:-right-2.5",
        !nutral && "bg-background text-foreground border-2 border-foreground",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export default SparkifyCard;
