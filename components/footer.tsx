import SparkifyBlack from "@/assets/Sparkify-white.svg";
import Image from "next/image";
import { ChevronsLeftRightEllipsis, Clapperboard, ScanQrCode, Phone, Mail, MessageSquare, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { cn } from "@/utils/twcn";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer
      className={cn(
        "footer-container py-8 px-8 font-sans",
        "bg-background text-foreground"
      )}
      dir="ltr"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left md:place-items-center">
        {/* Social Media Section */}
        <div className="social-media space-y-4 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">{t("socialMedia")}</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Instagram className="text-foreground" /> <span>@SparkifyTech</span>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="text-foreground" /> <span>@SparkifyTech</span>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info space-y-4 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">{t("contactInformation")}</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="text-foreground" /> <span dir="ltr">+90-5437710174</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-foreground" /> <span>info@sparkify.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="text-foreground" /> <span>{t("chat")}</span>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="services space-y-4 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">{t("ourServices")}</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ChevronsLeftRightEllipsis className="text-foreground" /> <span>{t("webDevelopment")}</span>
            </li>
            <li className="flex items-center gap-2">
              <Clapperboard className="text-foreground" /> <span>{t("videoShooting")}</span>
            </li>
            <li className="flex items-center gap-2">
              <ScanQrCode className="text-foreground" /> <span>{t("digitalMarketing")}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 flex flex-col items-center space-y-4">
        {/* Company Logo */}
        <div
          className={cn(
            "footer-logo w-20 h-20 flex items-center justify-center",
            "bg-accent"
          )}
        >
          <Image
            src={SparkifyBlack}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Footer Text */}
        <p className="text-sm">{t("allRightsReserved")}</p>
      </div>
    </footer>
  );
};

export default Footer;
