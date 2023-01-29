import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Img1 from "../public/foto1.jpeg";
import Card from "./Card.jsx";
import Title from "./Title";

const Articoli = ({ posts }) => {
  return (
    <Element
      name="articoli"
      className="bg-slate-700 w-full h-[35rem] flex flex-col m-auto p-auto justify-center">
      <div className="text-center h-20 mx-auto flex items-center justify-center py-10">
        <h1 className="absolute flex items-center justify-center font-black text-6xl text-white opacity-10">
          NEWS
        </h1>
        <h2 className="absolute flex items-center justify-center font-bold text-2xl text-[#F5F5F7]">
          ARTICOLI
        </h2>
      </div>
      <div className="flex overflow-x-scroll py-10 scrollbar-hide snap-x">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 snap-x">
          {posts.map((post) => (
            <Card className="snap-center" key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Articoli;
