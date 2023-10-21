import React from "react";
import "../globals.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function NFTMarket() {
	const emptyItems = new Array(100).fill(null);

	return (
		<div>
			<NavBar />
			<h1 className="mt-8 text-4xl text-center">NFT Marketplace</h1>
			<p className="mt-4 text-center">The NFT Marketplace to buy and sell your Profile Pictures.</p>
			<div>
				<div className="grid-container">
					{emptyItems.map((_, index) => (
						<div className="grid-item" key={index}>
							<div className="square"></div>
							<div className="text-placeholder">NFT {index + 1}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
