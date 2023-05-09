import React from "react";

import Card from "./Card.jsx";


const Articoli = ({ posts }) => {
  const authors = getAuthors(posts);
  return (
    <section id="articoli" className="bg-slate-700 w-full  flex flex-col m-auto p-auto pt-20 lg:pt-28 justify-center">
      
      <div className="text-center mx-auto flex items-center justify-center py-10">
        <h2 className="absolute flex items-center justify-center font-black text-6xl text-white opacity-10">
          NEWS
        </h2>
        <h3 className="absolute flex items-center justify-center font-bold text-2xl text-[#F5F5F7]">
          ARTICOLI
        </h3>
      </div>

      <div className="flex overflow-x-scroll py-10 scrollbar-hide snap-x">
        <div className="flex flex-nowrap items-stretch lg:ml-40 md:ml-20 ml-10 snap-x">
          {posts.map((post) => (
            <Card className="snap-center h-full" key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="m-auto py-5 pb-10 text-center text-[#F5F5F7]">
        <h2 className='text-2xl uppercase font-bold'>Contributi</h2>
        <div className="pt-8 pb-4">
          {authors && authors.map((author, index) => (
              <div className="inline-block w-fit px-4 italic" key={index}>
                {author}
              </div>
            ))}
        </div>
        <div className="text-sm py-2 px-4">
          Se vuoi collaborare alla scrittura degli articoli contattaci in privato
        </div>
      </div>
    </section>
  );
};

export default Articoli;


function getAuthors(posts) {
  let authors = [];
  if(posts){
    posts.forEach((post) => {
      if (!authors.includes(post.frontmatter.author)) {
        authors.push(post.frontmatter.author);
      }
    });
  }
  return authors;
}