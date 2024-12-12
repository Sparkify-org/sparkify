"use client";

import React from "react";
import Label from "../Label";
import Button from "../Button";
import OurServicesLink from "./OurServicesLink";
import {
  Clapperboard,
  ScanQrCode,
  ChevronsLeftRightEllipsis,
  Palette,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/twcn"; // Import the cn utility

function OurServices() {
  const t = useTranslations("OurServices");

  return (
    <div
      className={cn(
        "border relative z-0  h-full w-full flex flex-col items-center justify-center text-center font-sans",
        "bg-[var(--background)] text-[var(--foreground)]"
      )}
    >
      
        <Label title={t("Label")}  />


      <OurServicesLink
        title={t("Cards.WebDev.title")}
        icon={
          <ChevronsLeftRightEllipsis size={24} className="lg:w-10 lg:h-10" />
        }
        text={t("Cards.WebDev.description")}
      />
      <OurServicesLink
        title={t("Cards.GraphicDesign.title")}
        icon={<Palette size={24} className="lg:w-10 lg:h-10" />}
        text={t("Cards.GraphicDesign.description")}
      />
      <OurServicesLink
        title={t("Cards.VideoShooting.title")}
        icon={<Clapperboard size={24} className="lg:w-10 lg:h-10" />}
        text={t("Cards.VideoShooting.description")}
      />
      <OurServicesLink
        title={t("Cards.DigitalMarketing.title")}
        icon={<ScanQrCode size={24} className="lg:w-10 lg:h-10" />}
        text={t("Cards.DigitalMarketing.description")}
      />

      <Button href="#" text="Contact Us For More Information" />
    </div>
  );
}

export default OurServices;
