"use client";

import { useState, useContext } from "react";
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
import { UserContext } from "@/app/UserContext";

//import { UserContext } from "src/UserContext.js";

export default function TransferForm() {
	const { userData } = useContext(UserContext);
	const [satoshis, setSatoshis] = useState("");

	const handleInputChange = (event) => {
		setSatoshis(event.target.value);
	};

	const buildTransaction = async (e) => {
		e.preventDefault();
		const testnet = new TestnetHelper();
		// const testnet = new DevEnvHelper();
		// setting BTC address for devnet
		// const bitcoinAccountA = await testnet.getBitcoinAccount(WALLET_00);
		// const btcAddress = bitcoinAccountA.wpkh.address;
		// const btcPublicKey = bitcoinAccountA.publicKey.buffer.toString();

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

	return (
		<form className="flex flex-col items-center space-y-4">
			<button
				type="submit"
				className="w-1/3 px-6 py-2 bg-orange-500 rounded hover:bg-orange-600 focus:outline-none"
				onClick={buildTransaction}
			>
				Transfer sBTC
			</button>
		</form>
	);
}
