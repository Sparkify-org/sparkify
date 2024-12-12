import Link from "next/link";
import { cn } from "@/utils/twcn";

interface ButtonProps {
  href: string;
  text: string;
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

const Button: React.FC<ButtonProps> = ({ href, text, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        "my-4 lg:text-lg relative flex items-center justify-center border bg-foreground text-background text-xs h-12 p-3",
        "after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:bg-background",
        "after:border after:border-foreground after:-z-10 transition-all duration-300 hover:bg-background hover:text-foreground",
        "hover:after:bg-foreground active:after:translate-y-1",
        className
      )}
    >
      {text}
    </Link>
  );
};

export default Button;
