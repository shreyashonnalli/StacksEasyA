import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/logo.png";
import ConnectWallet from "../WalletConnect";

export default function NavBar({ userSession, userData, setUserData }) {
	return (
		<div className="w-full flex justify-between items-center border-2 border-gray-200  bg-zinc-900 py-2 px-4">
			<Link href="/">
				<div className="mr-4">
					<Image
						className="cursor-pointer"
						src={Logo}
						alt="Logo"
						layout="responsive"
						height={50}
						width={50}
					/>
				</div>
			</Link>
			<text
				style={{
					fontFamily: "Courier New",
					fontSize: "50px",
					letterSpacing: "5px",
				}}
			>
				socialBTC
			</text>
			{userData.profile ? <div className="w-16 h-16 bg-gray-300 rounded-full"></div> : ""}
			{userData ? (
				<ConnectWallet userSession={userSession} userData={userData} setUserData={setUserData} />
			) : (
				""
			)}
		</div>
	);
}
