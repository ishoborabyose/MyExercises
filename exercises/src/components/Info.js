import React from "react";
import { SiGooglemessages } from "react-icons/si";
import img from "../assets/Rectangle.png";

function Info() {
  return (
    <div className="bg-[#1A1B21] max-w-2xl mx-auto">
      <img className="w-[100%] object-cover" src={img} />
      <div>
        <h4 className="font-bold text-[25px] leading-[30px] text-center text-white mt-[30px] mb-[10px]">
          Laura Smith
        </h4>
        <h5 className="mt-0 mb-[10px] font-normal text-[12.8px] text-center text-[#f3bf99]">
          FrontEnd Developer
        </h5>
        <h6 className="mt-0 mb-[20px] font-normal text-[10.24px] leading-[150%] text-center text-[#f5f5f5]">
          {" "}
          laurasmith.website{" "}
        </h6>
      </div>

      <button className="w-[247px] h-[34px] bg-white border border-[#d1d5db] rounded-[6px] flex justify-center items-center py-[9px] pr-[13px] pl-[11px] gap-[8px] m-auto font-medium text-[14px] leading-[16px] text-[#374151]">
        {" "}
        <SiGooglemessages className="msg" /> Email
      </button>
    </div>
  );
}

export default Info;
