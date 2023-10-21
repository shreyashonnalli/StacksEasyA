import ContentCard from "./components/ContentCard";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { BluePost } from "./images/feeds/all-posts";
import { content } from "./images/feeds";

export const metadata = {
  title: "BitLoan",
  description: "A decentralized Bitcoin lending application",
};

export default function Home() {
  const content2 = content;
  return (
    <>
      <NavBar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <SideBar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1 mr-20">
          <h1 className="mt-8 text-4xl text-center">Home Page</h1>

          {content2?.length ? (
            content2.map((item) => <ContentCard post={item} key={item.id} />)
          ) : (
            <text>No results</text>
          )}
        </div>
      </div>
    </>
  );
}
