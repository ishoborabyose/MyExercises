import { useContext } from "react";
import { LoginContext } from "../Features/LoginContext";

const Profile = () => {
  const { userName } = useContext(LoginContext);
  return (
    <div>
      <h1>Profile</h1>
      <h1>user name: {userName}</h1>
    </div>
  );
};

export default Profile;
