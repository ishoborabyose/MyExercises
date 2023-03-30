import { useContext } from "react";
import { LoginContext } from "../Features/LoginContext";

const Login = () => {
  const { setUserName, setShowProfile } = useContext(LoginContext);
  return (
    <div className="flex flex-col gap-2 mt-3 items-center">
      <input
        className="border cursor-pointer border-blue-200 bg-blue-100 text-gray-500 px-3 py-2 hover:bg-blue-300"
        placeholder="userName"
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="border cursor-pointer border-blue-200 bg-blue-100 text-gray-500 px-3 py-2 hover:bg-blue-300"
        placeholder="password"
        type="text"
      />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
        className="border cursor-pointer border-blue-200 bg-blue-200 text-gray-500 px-3 py-2 hover:bg-blue-300"
      >
        LOGIN
      </button>
    </div>
  );
};

export default Login;
