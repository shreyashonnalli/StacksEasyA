import ContentCard from "./components/ContentCard";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { BluePost } from "./images/feeds/all-posts";

export const metadata = {
  title: "BitLoan",
  description: "A decentralized Bitcoin lending application",
};

export default function Home({ content }) {
  return (
    <>
      <NavBar />
      <SideBar />
      {content?.length ? (
        content.map((item) => <ContentCard post={item} key={item.id} />)
      ) : (
        <text>No results</text>
      )}
      <h1 className="mt-8 text-4xl text-center">Lagoon</h1>
      <p className="mt-4 text-center">
        Decentralized lending and borrowing with sBTC.
      </p>
    </>
  );
}
