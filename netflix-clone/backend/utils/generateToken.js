import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

	res.cookie("authToken", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "development", // Use secure cookies in production
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
	  });

	return token;
};