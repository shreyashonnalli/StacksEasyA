import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export const metadata = {
  title: "BitLoan",
  description: "A decentralized Bitcoin lending application",
};

export default function Home() {
  return (
    <>
      <NavBar />
      <SideBar />
      <h1 className="mt-8 text-4xl text-center">Lagoon</h1>
      <p className="mt-4 text-center">
        Decentralized lending and borrowing with sBTC.
      </p>
    </>
  );
}
