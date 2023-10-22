"use client";

import ContentCard from "./components/ContentCard";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { BluePost } from "./images/feeds/all-posts";
import { content } from "./images/feeds";

import React, { useState, useEffect, useContext } from "react";
import { AppConfig, UserSession } from "@stacks/connect";

// export const metadata = {
// 	title: "BitLoan",
// 	description: "A decentralized Bitcoin lending application",
// };
// const [userData, setUserData] = useState({});

export default function Home() {
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
		<>
			{userData !== undefined ? (
				<>
					<NavBar userSession={userSession} userData={userData} setUserData={setUserData} />
				</>
			) : (
				""
			)}
			{userData.profile ? (
				<div className="flex gap-6 md:gap-20">
					<div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
						<SideBar userSession={userSession} userData={userData} setUserData={setUserData} />
					</div>
					<div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
						<h1 className="mt-8 text-4xl text-center">Home Page</h1>
						{content?.length ? (
							content.map((item) => <ContentCard post={item} key={item.id} userData={userData} />)
						) : (
							<text>No results</text>
						)}
						<p className="mt-4 text-center">Decentralized lending and borrowing with sBTC.</p>
					</div>
				</div>
			) : (
				<p>Log In Please!</p>
			)}
		</>
	);
}
