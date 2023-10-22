import ContentCard from "./components/ContentCard";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { content } from "./images/feeds";

import React from "react";
import { UserContext } from "./UserContext";
// export const metadata = {
// 	title: "BitLoan",
// 	description: "A decentralized Bitcoin lending application",
// };
// const [userData, setUserData] = useState({});

export default function Home() {
	const { userData } = UserContext(UserContext);
	return (
		<>
			{userData.profile ? (
				<div className="flex gap-6 md:gap-20">
					<div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
						<SideBar />
					</div>
					<div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
						<h1 className="mt-8 text-4xl text-center">Home Page</h1>
						{content?.length ? (
							content.map((item) => <ContentCard post={item} key={item.id} />)
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
