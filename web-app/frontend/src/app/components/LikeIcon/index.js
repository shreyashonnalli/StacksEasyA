"use client";
import React, { useState } from "react";
import {
	DevEnvHelper,
	sbtcDepositHelper,
	TESTNET,
	TestnetHelper,
	WALLET_00,
	WALLET_01,
} from "sbtc";
import { bytesToHex, hexToBytes } from "@noble/hashes/utils";
import * as btc from "@scure/btc-signer";

export default function HeartIcon({ userData }) {
	const [heartColor, setHeartColor] = useState("white");

	const buildTransaction = async (e) => {
		e.preventDefault();
		const testnet = new TestnetHelper();
		// const testnet = new DevEnvHelper();

		// setting BTC address for devnet
		//const bitcoinAccountA = await testnet.getBitcoinAccount(WALLET_00);
		//const btcAddress = bitcoinAccountA.wpkh.address;
		//const btcPublicKey = bitcoinAccountA.publicKey.buffer.toString();

		// setting BTC address for testnet
		const btcAddress = userData.profile.btcAddress.p2wpkh.testnet;
		const btcPublicKey = userData.profile.btcPublicKey.p2wpkh;

		let utxos = await testnet.fetchUtxos(btcAddress);

		// If we are working via testnet
		// get sBTC deposit address from bridge API
		const response = await fetch("https://bridge.sbtc.tech/bridge-api/testnet/v1/sbtc/init-ui");
		const data = await response.json();
		const sbtcWalletAddress = data.sbtcContractData.sbtcWalletAddress;

		// if we are working via devnet
		// const sbtcWalletAccount = await testnet.getBitcoinAccount(WALLET_00);
		// const sbtcWalletAddress = sbtcWalletAccount.tr.address;
		const tx = await sbtcDepositHelper({
			// comment this line out if working via devnet
			network: TESTNET,
			sbtcWalletAddress,
			stacksAddress: userData.profile.stxAddress.testnet,
			amountSats: 100000,
			feeRate: await testnet.estimateFeeRate("low"),
			utxos,
			bitcoinChangeAddress: btcAddress,
		});

		const psbt = tx.toPSBT();
		const requestParams = {
			publicKey: btcPublicKey,
			hex: bytesToHex(psbt),
		};
		const txResponse = await window.btc.request("signPsbt", requestParams);
		const formattedTx = btc.Transaction.fromPSBT(hexToBytes(txResponse.result.hex));
		formattedTx.finalize();
		const finalTx = await testnet.broadcastTx(formattedTx);
		console.log(finalTx);
	};

	const handleHeartClick = (e) => {
		setHeartColor("red");
		buildTransaction(e);
	};
	return (
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="40px"
				viewBox="0 0 512 512"
				onClick={handleHeartClick}
			>
				<path
					d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
					fill={heartColor}
				/>
			</svg>
		</div>
	);
}
