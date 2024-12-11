"use client";

import React from "react";
import { LogoLight } from "@/components/LogoLight";
import { cn } from "@/utils/twcn";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations("Hero");

  return (
    <main className="min-h-[90vh] w-100 flex justify-center items-center relative overflow-x-hidden gap-20 font-sans">
      <div className="relative">
        <LogoLight width={400} />
      </div>
      <h1
        className={cn(
          "font-semibold mt-20 text-center text-6xl",
          locale === "ar" ? "font-sans" : "font-mono",
        )}
      >
        {t("title")}
      </h1>

      <div className="h-[10000px]" />
    </main>
  );
}
