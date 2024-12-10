"use client";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import LargeHeader from "./LargeHeader";
import SmallHeader from "./SmallHeader";

const Header = () => {
  const width = useWindowWidth();

  // to prevent rendering the small header 
  // on large screens for the first couple of seconds 
  // of rendering
  if (width == 0) return null;

  return width > 768 ? <LargeHeader /> : <SmallHeader />;
};

export default Header;
