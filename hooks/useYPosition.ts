"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export const useYPosition = () => {
  const { scrollY } = useScroll();
  const [yPosition, setYPosition] = useState(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setYPosition(y);
  });

  return yPosition;
};
