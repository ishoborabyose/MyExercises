import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Pedro", age: 20, email: "pedro@gmail.com" }));
        }}
        className="text-base font-medium leading-7 px-2 py-1 bg-slate-300 border border-gray-500 mx-auto flex mt-1"
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
        className="text-base font-medium leading-7 px-2 py-1 bg-slate-300 border border-gray-500 mx-auto flex mt-1"
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
