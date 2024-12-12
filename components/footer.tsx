import SparkifyBlack from "@/assets/Sparkify-white.svg";
import Image from "next/image";
import { ChevronsLeftRightEllipsis, Clapperboard, ScanQrCode, Phone, Mail, MessageSquare, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="footer-container bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 py-8 px-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Social Media Section */}
        <div className="social-media space-y-4 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold dark:text-white">{t("socialMedia")}</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Instagram className="dark:text-gray-200" /> <span>@SparkifyTech</span>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="dark:text-gray-200" /> <span>@SparkifyTech</span>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info space-y-4 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold dark:text-white">{t("contactInformation")}</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="dark:text-gray-200"  /> <span>+90-5437710174</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="dark:text-gray-200" /> <span>info@sparkify.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="dark:text-gray-200" /> <span>{t("chat")}</span>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="services space-y-4 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold dark:text-white">{t("ourServices")}</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ChevronsLeftRightEllipsis className="dark:text-gray-200" /> <span>{t("webDevelopment")}</span>
            </li>
            <li className="flex items-center gap-2">
              <Clapperboard className="dark:text-gray-200" /> <span>{t("videoShooting")}</span>
            </li>
            <li className="flex items-center gap-2">
              <ScanQrCode className="dark:text-gray-200" /> <span>{t("digitalMarketing")}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 flex flex-col items-center space-y-4">
        {/* Company Logo */}
        <div className="footer-logo bg-gray-300 dark:bg-gray-700 w-20 h-20 flex items-center justify-center">
          <Image src={SparkifyBlack} alt="Logo" className="w-full h-full object-cover" />
        </div>
        {/* Footer Text */}
        <p className="text-sm dark:text-gray-400">{t("allRightsReserved")}</p>
      </div>
    </footer>
  );
};

export default Footer;
