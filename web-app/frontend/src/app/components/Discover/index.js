import Link from "next/link";
import React from "react";
import { topics } from "../../utils/topics";

export default function Discover() {
	const activeTopicStyle =
		"xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]";
	const topicStyle =
		"border-2 hover:bg-gray-500 border-gray-300 px-3 py-2 rounded rounded-full flex items-center gap-2 justify-center cursor-pointer text-white";

	return (
		<div className="xl:border-b-2 xl:border-gray-200 pb-6">
			<p className="text-white font-semibold m-3 mt-4 block">Popular Topics</p>
			<div className="flex gap-3 flex-wrap">
				{topics?.map((item) => (
					<Link href={`/?topic=${item.name}`} key={item.name}>
						<div className={topicStyle}>
							<span className="font-bold text-2xl xl:text-md ">{item.icon}</span>
							<span className={`font-medium text-md hidden md:block capitalize`}>{item.name}</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
