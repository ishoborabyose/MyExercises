import React from "react";
import ChangeColor from "./ChangeColor";
import Login from "./Login";
import Profile from "./Profile";

const Ui = () => {
  return (
    <div>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
};

export default Ui;
