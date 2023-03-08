import React from "react";

const Main = (props) => {
  return (
    <main
      className={`${
        props.darkMode
          ? "bg-bgCover bg-[#282d35] text-white"
          : "py-14 px-7 bg-bgImg bg-right bg-white text-[#2b283a]"
      } `}
    >
      <h1 className="m-0 text-4xl">Fun facts about React</h1>
      <ul className="mt-12 max-w-md">
        <li className="p-3 marker:text-base marker:text-[#61dafb]">
          Was first released in 2013
        </li>
        <li className="p-3 marker:text-base marker:text-[#61dafb]">
          Was originally created by Jordan Walke
        </li>
        <li className="p-3 marker:text-base marker:text-[#61dafb]">
          Has well over 100K stars on GitHub
        </li>
        <li className="p-3 marker:text-base marker:text-[#61dafb]">
          Is maintained by Facebook
        </li>
        <li className="p-3 marker:text-base marker:text-[#61dafb]">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
};

export default Main;
