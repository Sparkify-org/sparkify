import React from "react";

interface FormLinkProps {
  type: string;
  placeholder: string;
  height?: string;
}

const FormLink: React.FC<FormLinkProps> = ({ type, placeholder, height }) => {
  return (
    <div className="relative mt-4">
      {/* Input with 'peer' class */}
      <input
        type={type}
        placeholder={placeholder}
        className={`peer relative  z-10 border border-black p-2 w-full text-black bg-white rounded-none outline-none focus:border-black focus:ring-0 ${
          height || ""
        }`}
      />
      {/* Shadow */}
      <span className="absolute  top-1 left-1 w-full h-full bg-white border border-black -z-10 rounded-none transition-all duration-300 peer-focus:bg-black peer-hover:bg-black peer-focus:translate-y-1"></span>
    </div>
  );
};

export default FormLink;
