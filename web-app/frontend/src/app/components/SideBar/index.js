import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Discover from "../Discover";

export default function SideBar() {
  const normalLink =
    "flex items-center grap-3 hover:background-color:white p-3 justify-center xl:justify-start cursor-pointer font-semibold";

  return (
    <div>
      <div className="md:w-52 w-40 flex flex-col justify-start mb-10 border-r-2 border-grey-200 bg-zinc-900  p-3">
        <div className="xl:border-b-2 border-gray-200">
          <Link href="/">
            <button className="bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none hover:bg-gray-800 hover:transition-all 10s hover:text-white hover:border-white transition-colors 5s">
              Create
            </button>
          </Link>
          <Link href="/">
            <div className={normalLink}>
              <p className="text-xl">
                <text>Home</text>
              </p>
            </div>
          </Link>
          <Link href="/nft-market">
            <div className={normalLink}>
              <p className="text-xl">
                <text>NFT Market</text>
              </p>
            </div>
          </Link>
        </div>
        <Discover />
      </div>
    </div>
  );
}
