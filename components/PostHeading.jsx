import Link from "next/link";
import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import dayjs from "dayjs";

const PostHeading = ({ frontmatter, readingTime }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-1">
        <div>
          <Link href={"/#articoli"}>
            <BsFillArrowLeftCircleFill size={40} className="text-slate-800" />
          </Link>
        </div>
        <div className="font-semibold text-6xl">{frontmatter.title}</div>
        <div className="flex flex-col items-end">
          <div className="px-2">
            {dayjs(frontmatter.date).format("D/MM/YYYY")}
          </div>
          <div className="flex flex-row items-center">
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
