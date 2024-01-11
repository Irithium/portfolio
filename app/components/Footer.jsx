import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353f] border-l-transparent border-r-transparent text-white">
      <div className="mx-auto py-5 px-8 flex justify-between container">
        <Image
          src="/images/logo-image.png"
          alt="Logo"
          width={150}
          height={50}
          className="w-[100px] h-[50px] md:w-[130px] md:h-[65px]"
        />

        <p className="text-slate-600 self-center text-sm md:text-base">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
