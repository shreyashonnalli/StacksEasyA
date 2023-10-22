export const metadata = {
	title: "Deposit",
	description: "A decentralized Bitcoin lending application",
};

export default function Transfer() {
	return (
		<div className="min-h-screen text-white bg-gray-800">
			<TransferForm />
		</div>
	);
}
