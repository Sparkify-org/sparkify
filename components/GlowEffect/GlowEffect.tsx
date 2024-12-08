import React from "react";

const GlowEffect = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center mb-28 ml-28">
      <div className="absolute w-[940px] aspect-square rounded-full bg-[#ffface] -z-[80] opacity-15" />
      <div className="absolute w-[820px] aspect-square rounded-full bg-[#fff77e] -z-[80] opacity-15" />
      <div className="absolute w-[700px] aspect-square rounded-full bg-[#ffef76] -z-[80] opacity-15" />
      <div className="absolute w-[590px] aspect-square rounded-full bg-[#ffe000] -z-[70] opacity-15" />
      <div className="absolute w-[500px] aspect-square rounded-full bg-[#ffc000] -z-[60] opacity-15" />
      <div className="absolute w-[420px] aspect-square rounded-full bg-[#f09c06] -z-50 opacity-15" />
      <div className="absolute w-[350px] aspect-square rounded-full bg-[#ffbb00] -z-40 opacity-15" />
      <div className="absolute w-[300px] aspect-square rounded-full bg-[#ffe000] -z-30 opacity-15" />
      <div className="absolute w-[250px] aspect-square rounded-full bg-[#fff77e] z-10 opacity-15" />
      <div className="absolute w-[200px] aspect-square rounded-full bg-[#ffface] z-20 opacity-15" />
    </div>
  );
};

export default GlowEffect;
