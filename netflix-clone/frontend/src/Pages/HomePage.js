import React from "react";
import HomeScreen from "./Home/HomeScreen";
import AuthScreen from "./Home/AuthScreen";

const HomePage = () => {
  const user = false;
  return <main>{user ? <HomeScreen /> : <AuthScreen />}</main>;
};

export default HomePage;
