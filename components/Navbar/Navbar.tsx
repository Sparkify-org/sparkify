import Link from "next/link";
import React from "react";

interface Props {
  className: React.HTMLAttributes<HTMLElement>["className"];
}

const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <nav>
        <ul className="flex justify-center items-center">
          <li>
            <Link href="#"></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
