import React from "react";

interface LabelProps {
    title:string;
}

const Label: React.FC<LabelProps> = ({title})=> {
  return (
    <div >
      <label className="lg:text-2xl  relative  p-3 lg:px-20 lg:py-4 text-md bg-black text-white after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:bg-white after:border after:border-black after:-z-10">
        {title}
      </label>
    </div>
  );
}

export default Label;
