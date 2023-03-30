import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { LoginContext } from "./Features/LoginContext";

export default function App() {
  const [userName, setUserName] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      <LoginContext.Provider value={{ userName, setUserName, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}
