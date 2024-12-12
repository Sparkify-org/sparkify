import React from "react";
import FormLink from "./FormLink";
import Button from "./Button";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/twcn";
import Label from "./Label";

function ContactForm() {
  const t = useTranslations("ContactForm");

  return (
    <div className={cn("p-4 mt-20 bg-background text-foreground")}>
      <div className="max-w-2xl mx-auto relative z-0">
        {/* Label */}

        <Label title={t("ContactUs")} />

        {/* Input Fields */}
        <form
          className={cn(
            "mt-10 border border-foreground p-4 shadow-box-black-sm rounded-md"
          )}
        >
          <ul className="text-xs lg:text-lg space-y-4">
            <li>
              <FormLink type="text" placeholder={t("EnterName")} />
            </li>
            <li>
              <FormLink type="text" placeholder={t("EnterEmail")} />
            </li>
            <li>
              <FormLink
                type="text"
                placeholder={t("HowCanWeHelp")}
                height="h-32 lg:h-48"
              />
            </li>
          </ul>

          {/* Send Button */}
          <div className="flex flex-col items-center mt-6">
            <Button href="#" text={t("Send")} />
          </div>

          {/* Chat Section */}
          <div className="mt-6 text-center">
            <label className="text-xs lg:text-lg">{t("OrChatWithUs")}</label>
          </div>

          {/* Social Links */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            <Button href="#" text="Whatsapp" className="mx-1" />
            <Button href="#" text="Linkedin" className="mx-1" />
            <Button href="#" text="Instagram" className="mx-1" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
