import React from "react";
import Image from "next/image";
import { BsPlay, BsFillPlayFill, BsFillPauseFill, BsHeart } from "react-icons/bs";
import HeartIcon from "../LikeIcon";

const ContentCard = ({ post, userData }) => {
	const postDimensions = { width: 200, height: 100 };
	const iconDimensions = { width: 1, height: 1 };

	return (
		<div className="flex flex-col border-b-2 border-gray-200 pb-6 bg-[rgba(255,255,255,0.1)] rounded-3xl">
			<div className="flex gap-4 relative justify-center align-baseline">
				<div
					className="rounded-3x1 flex"
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(2, 300px)",
						gridTemplateRows: "repeat(1, 200px)",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						className="object-cover w-1 h-1"
						src={post.authorImage}
						layout="responsive"
						alt=""
						width={1}
						height={1}
						style={{
							borderRadius: "50%",
							maxWidth: "150px",
							maxHeight: "150px",
							padding: "10px",
						}}
					/>

					<Image
						className="w-auto h-auto"
						src={post.icon}
						alt=""
						width={500}
						height={200}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
						}}
					></Image>
					<div className="ml-[525px] mt-2">
						{/* <BsHeart className="ml-[550px] mt-2" color="white" size="40px" /> */}
						<HeartIcon className="ml-[2000px] mt-2" userData={userData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
