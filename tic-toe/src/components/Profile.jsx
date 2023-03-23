import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div style={{ color: themeColor }} className="text-center space-y-2">
      <h1 className="text-lg font-bold leading-9">Profile Page</h1>
      <p className="text-base font-medium leading-7">Name: {user.name}</p>
      <p className="text-base font-medium leading-7">Age: {user.age}</p>
      <p className="text-base font-medium leading-7">Email: {user.email}</p>
    </div>
  );
};

export default Profile;
