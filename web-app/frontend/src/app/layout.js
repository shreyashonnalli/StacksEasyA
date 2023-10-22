"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserContext } from "./UserContext.js";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { AppConfig, UserSession } from "@stacks/connect";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	const [userData, setUserData] = useState({});
	const appConfig = new AppConfig();
	const userSession = new UserSession({ appConfig });

	useEffect(() => {
		if (userSession.isSignInPending()) {
			userSession.handlePendingSignIn().then((userData) => {
				setUserData(userData);
			});
		} else if (userSession.isUserSignedIn()) {
			setUserData(userSession.loadUserData());
		}
	}, []);

	return (
		<html lang="en">
			<body className={inter.className}>
				<UserContext.Provider value={{ userData, userSession }}>
					<NavBar userData={userData} userSession={userSession} setUserData={setUserData} />
					{children}
				</UserContext.Provider>
			</body>
		</html>
	);
}
