import React from "react";
import troll from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="flex items-center h-[65px] bg-[#672280] text-white p-[20px]">
      <img className="h-[100%] mr-[6px]" src={troll} />
      <h2 className="text-[1.25rem] mr-auto">Meme Generator</h2>
      <h4 className="text-[0.75rem] font-medium">React Course - Project 3</h4>
    </header>
  );
}
