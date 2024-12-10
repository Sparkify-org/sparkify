import AnimatedLogo from "@/components/AnimatedLogo";
import { cn } from "@/utils/twcn";
import { Quote } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("Hero");

  return (
    <div className="min-h-[90vh] flex justify-center items-center relative overflow-x-hidden gap-20 font-sans">
      <div className="relative">
        <AnimatedLogo width={400} />
      </div>
      <div className="mt-20">
        <h1
          className={cn(
            "font-semibold  text-start text-6xl",
            locale === "ar" ? "font-sans" : "font-mono",
          )}
        >
          {t("title")}
        </h1>
        <div className="mt-10 p-4 bg-black text-white relative">
          <Quote className="rotate-180" />
          <p className="text-xl italic">{t("line1")}</p>
          <Quote className="ms-auto" />
          <div className="absolute w-full h-full bg-white border-2 border-black -z-10 top-0" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
