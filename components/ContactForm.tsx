import React from "react";
import FormLink from "./FormLink";
import Button from "./Button";
import { useTranslations } from "next-intl";

function ContactForm() {
  const t = useTranslations("ContactForm");

  return (
    <div className="p-4 mt-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-2xl mx-auto">
        {/* Label */}
        <h2 className="lg:text-xl text-md relative border p-3 bg-black text-white text-center mx-auto w-fit after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:bg-white after:border after:border-black after:-z-10 dark:bg-white dark:text-black dark:after:bg-black dark:after:border-white">
          {t("ContactUs")}
        </h2>

        {/* Input Fields */}
        <form className="mt-10 border border-black p-4 shadow-box-black-sm rounded-md dark:border-white">
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
