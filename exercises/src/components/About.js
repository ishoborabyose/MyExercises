import React from "react";

function About() {
  return (
    <div className="bg-[#1A1B21] py-4 max-w-2xl mx-auto">
      <div className="max-w-[247px] m-auto">
        <h2 className="font-bold text-[16px] leading-[150%] text-[#f5f5f5]">
          {" "}
          About{" "}
        </h2>
        <p className="font-normal text-[10.24px] leading-[150%] text-[#dcdcdc]">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
    </div>
  );
}

export default About;
