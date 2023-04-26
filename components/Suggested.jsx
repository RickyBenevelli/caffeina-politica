import React from "react";

import Card from "./Card";
import Title from "./Title";

const Suggested = ({suggested}) => {

  return (
    <div className={`${suggested?.length != 0 ? "" : "hidden"}`}>
      <Title title="ARTICOLI" background="CORRELATI"/>
      <div className="flex overflow-x-scroll pb-10 scrollbar-hide snap-x">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 snap-x">
          {suggested.map((post) => (
            <Card className="snap-center" key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggested;
