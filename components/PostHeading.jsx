import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";

const PostHeading = ({ frontmatter, readingTime }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-1">
        <div className="hidden md:block">
          <Link href={"/#articoli"}>
            <BsFillArrowLeftCircleFill size={40} className="text-gray-700/80 hover:text-gray-700" />
          </Link>
        </div>
        <div className="font-semibold text-3xl lg:text-6xl text-gray-900">{frontmatter.title}</div>
        <div className="flex flex-col items-end">
          <div className="px-2 text-sm">
            {dayjs(frontmatter.date).format("D/MM/YYYY")}
          </div>
          <div className="flex flex-row items-center text-sm">
            <CiTimer size={18} />
            <div className="px-2">{readingTime}</div>
          </div>
        </div>
      </div>
      <hr className="" />
    </div>
  );
};

export default PostHeading;
