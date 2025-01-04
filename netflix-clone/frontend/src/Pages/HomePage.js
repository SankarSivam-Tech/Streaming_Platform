import React from "react";
import HomeScreen from "./Home/HomeScreen";
import AuthScreen from "./Home/AuthScreen";
import { useAuthStore } from "../store/authStore";

const HomePage = () => {
	const { user } = useAuthStore();

	return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
};
export default HomePage;
