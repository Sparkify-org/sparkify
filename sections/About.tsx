"use client";

import SparkifyCard from "@/components/SparkifyCard";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import dataVis from "@/assets/undraw_all_the_data_re_hh4w 1.svg";
import softwareEngineer from "@/assets/undraw_software_engineer_re_tnjc.svg";
import socialUpdate from "@/assets/undraw_social_update_re_xhjr.svg";
import { Logo } from "@/components/Logo";
import { useTheme } from "next-themes";
import { LogoLight } from "@/components/LogoLight";

const About = () => {
  const { theme } = useTheme();
  const t = useTranslations("About");

  return (
    <section className="py-10">
      <h2 className="lg:text-2xl w-fit mx-auto mb-24 relative p-5 text-md bg-foreground text-background after:content-[''] after:absolute after:top-1.5 after:left-1.5 after:w-full after:h-full after:bg-background after:border-2 after:border-foreground after:-z-10">
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 2xl:mx-52 lg:mx-24 md:mx-8 sm:mx-24 mx-12 2xl:gap-40 xl:gap-20 gap-10 sm:mb-24 mb-12">
        <SparkifyCard className="lg:p-10 md:p-6 sm:p-10 p-6 h-fit">
          <p className="text-[20px] lg:leading-10 leading-8">{t("paragraph1")}</p>
        </SparkifyCard>
        <Image src={dataVis} alt={t("image_alt1")} className="my-auto mx-auto" />
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse 2xl:mx-52 lg:mx-24 md:mx-8 sm:mx-24 mx-12 2xl:gap-40 xl:gap-20 gap-10 md:mb-24 mb-12">
        <Image src={softwareEngineer} alt={t("image_alt1")} className="my-auto mx-auto"/>
        <SparkifyCard className="p-10 h-fit mt-10">
          <p className="text-[20px] lg:leading-10 leading-8">{t("paragraph2")}</p>
        </SparkifyCard>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 2xl:mx-52 lg:mx-24 md:mx-8 sm:mx-24 mx-12 2xl:gap-40 xl:gap-20 gap-10 md:mb-24 mb-12">
        <SparkifyCard className="p-10 h-[250px] md:mt-20 mt-10">
          <p className="text-3xl lg:leading-10 leading-8">{t("paragraph3")}</p>
          <div className="opacity-25 ms-auto w-fit mt-3">
            {theme === "light" ? (
              <Logo width={100} />
            ) : (
              <LogoLight width={100} />
            )}
          </div>
        </SparkifyCard>
        <Image src={socialUpdate} alt={t("image_alt1")} className="my-auto mx-auto" />
      </div>
    </section>
  );
};

export default About;
