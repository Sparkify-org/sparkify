import React from "react";
import { ReactNode } from "react";

interface OurServicesLinkProps {
  title: string;
  icon: ReactNode;
  text: string;
}

const OurServicesLink: React.FC<OurServicesLinkProps> = ({
  title,
  icon,
  text,
}) => {
  return (
    <div className="border border-black grid lg:grid-flow-col grid-flow-row m-4 w-5/6   max-w-[300px] md:max-w-[400px] lg:max-w-[500px] shadow-box-black-sm lg:shadow-box-black-md lg:min-h-48 ">
  <div className=" lg:grid-flow-row grid p-2 bg-white  ">
    <label className="text-sm md:text-base lg:text-2xl lg:mx-4">{title}</label>
    <label className="flex items-center justify-center mt-2 lg:text-2xl lg:ml-4">{icon}</label>
  </div>
  <div className="mt-2 p-2">
    <label className="text-xs md:text-sm lg:text-base ">{text}</label>
  </div>
</div>

  );
};

export default OurServicesLink;
