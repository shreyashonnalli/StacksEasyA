import TransferForm from "../TransferForm/page";

export default function Transfer() {
	return (
		<div className="min-h-screen text-white bg-gray-800">
			<h2 className="my-6 text-3xl text-center">Borrow sBTC</h2>
			<TransferForm />
		</div>
	);
}
