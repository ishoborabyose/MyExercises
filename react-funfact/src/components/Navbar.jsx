const Navbar = (props) => {
  return (
    <nav
      className={`${
        props.darkMode ? "bg-[#21222A] shadow-xl" : "shadow-md bg-slate-200"
      } flex items-center  py-8 px-6 h-16 z-10 `}
    >
      <img className="w-8 mr-3" src="./images/reactjs-icon-small.png" />
      <h3 className="text-[#61dafb] mr-auto]">ReactFacts</h3>

      <div className="flex max-w-md ml-auto items-center">
        <p
          className={`${
            props.darkMode ? "text-white" : ""
          } text-[#2b283a]  text-sm font-semibold`}
        >
          Light
        </p>
        <div
          className={`w-6 h-3 bg-[#2b283a] rounded-[2rem] m-2 cursor-pointer flex justify-start items-center border border-black box-content ${
            props.darkMode ? "justify-end" : ""
          }`}
          onClick={props.toggleDarkMode}
        >
          <div className="toggler--slider--circle h-3 w-3 bg-white rounded-full"></div>
        </div>
        <p
          className={`${
            props.darkMode ? "text-white" : ""
          } text-[#2b283a]  text-sm font-semibold`}
        >
          Dark
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
