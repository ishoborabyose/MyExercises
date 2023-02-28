import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

import { RxLinkedinLogo } from "react-icons/rx";

function Footer() {
  return (
    <div className="bg-[#1A1B21]  max-w-2xl mx-auto">
      <div className="p-[20px] bg-[#161619] rounded-bl-[10px] flex gap-4  justify-center">
        <FaTwitterSquare className=" text-[#f5f5f5] w-10 h-10 px-[2px]" />
        <FaFacebookSquare className=" text-[#f5f5f5] w-10 h-10 px-[2px]" />
        <FaInstagramSquare className=" text-[#f5f5f5] w-10 h-10 px-[2px]" />
        <RxLinkedinLogo className=" text-[#f5f5f5] w-10 h-10 px-[2px]" />
        <FaGithubSquare className=" text-[#f5f5f5] w-10 h-10 px-[2px]" />
      </div>
    </div>
  );
}

export default Footer;
