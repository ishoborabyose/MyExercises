import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "@/features/theme";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="justify-center mt-4 flex">
      <input
        className="border border-blue-700"
        onChange={(event) => {
          setColor(event.target.value);
        }}
        type="text"
      />
      <button
        className="text-base font-medium leading-7 px-2 py-2 bg-slate-300 border border-gray-500 "
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change COLOR
      </button>
    </div>
  );
};

export default ChangeColor;
