import React from "react";
import FormLink from "./FormLink";
import Button from "./Button";

function ContactForm() {
  return (
    <div className="p-10 mt-40 text-center">
      {/* Label */}
      <label className="lg:text-xl relative border p-3 text-md bg-black text-white after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:bg-white after:border after:border-black after:-z-10">
        Contact us
      </label>

      {/* Input Fields */}
      <form className="mt-10 border border-black p-4 shadow-box-black-sm">
        <ul className="text-xs lg:text-lg">
          <li>
            <FormLink type="text" placeholder="Enter Your Name" />
          </li>
          <li>
            <FormLink type="text" placeholder="Enter Your E-mail" />
          </li>
          <li>
            <FormLink
              type="text"
              placeholder="How Can We Help"
              height="h-32 lg:h-48"
            />
          </li>
        </ul>

        {/* Send Button */}
        <div className="flex flex-col items-center">
          <Button href="#" text="Send" />
        </div>

        {/* Chat Section */}
        <div className="h-full mt-3 flex justify-center text-center">
          <label className="text-xs lg:text-lg">Or Chat With Us</label>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-3">
          <Button href="#" text="Whatsapp" additionalClasses="mx-1" />
          <Button href="#" text="Linkedin" additionalClasses="mx-1" />
          <Button href="#" text="Instagram" additionalClasses="mx-1" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
