"use client";

import AnimatedLogo from "@/components/AnimatedLogo";
import { cn } from "@/utils/twcn";
import { Quote } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import AnimatedLogoLight from "@/components/AnimatedLogoLight";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const Hero = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const width = useWindowWidth();
  const locale = useLocale();
  const t = useTranslations("Hero");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex lg:flex-row mx-8 flex-col justify-center items-center lg:gap-20 sm:gap-10 gap-5">
      {isMounted && (theme === "light" ? (
        <AnimatedLogo width={width > 500 ? 300 : 200} />
      ) : (
        <AnimatedLogoLight width={300} />
      ))}
      <div className="mt-10">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className={cn(
            "font-semibold  lg:text-start text-center sm:text-6xl text-4xl",
            locale === "ar" ? "font-sans" : "font-mono",
          )}
        >
          {t("title")}
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
            translateX: "10px",
            translateY: "10px",
          }}
          animate={{
            opacity: 1,
            translateX: "0px",
            translateY: "0px",
          }}
          className="mt-10 bg-foreground text-background p-4 relative before:absolute before:-z-10 before:w-full before:h-full before:border-2 before:border-foreground before:-bottom-2.5 before:-right-2.5"
        >
          <Quote className="rotate-180 rtl:rotate-0" />
          <p className="text-xl italic">{t("line1")}</p>
          <Quote className="ms-auto rtl:rotate-180" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
