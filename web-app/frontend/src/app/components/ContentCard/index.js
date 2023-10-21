import React from "react";
import Image from "next/image";
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const ContentCard = ({ post }) => {
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="w-16 h-16">
            <Image
              width={62}
              height={62}
              className="rounded-full"
              src={post.contentAuthor}
              layout="responsive"
              alt="alt-teext"
            />
          </div>
        </div>
      </div>
      <div className="lg:ml-20 flex gap-4 relative">
        <div className="rounded-3x1">
          <video
            className="lg:w[600px] h-[300px] md:h-[400px] w-[200px]"
            src={post.content}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
