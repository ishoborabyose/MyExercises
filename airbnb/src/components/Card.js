import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="w-[175px] text-[12px] flex flex-auto flex-col relative">
      {badgeText && (
        <div className="absolute top-[6px] left-[6px] bg-white py-[5px] px-[7px] rounded-sm font-bold">
          {badgeText}
        </div>
      )}
      <img
        src={`../assets/${props.coverImg}`}
        className="w-[100%] rounded-[9px] mb-[9px]"
      />
      <div className="flex items-center">
        <img src="../assets/Star.png" className="h-[14px]" />
        <span>{props.stats.rating}</span>
        <span className="text-[#918e9b]">({props.stats.reviewCount}) • </span>
        <span className="text-[#918e9b]">{props.location}</span>
      </div>
      <p className="overflow-hidden text-ellipsis">{props.title}</p>
      <p className="mt-auto">
        <span className="font-bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
