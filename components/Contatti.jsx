import React from "react";
import Link from "next/link";

import { FaTelegramPlane, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import Title from "./Title";

const Contatti = () => {
  return (
    <section id="contatti">
      <div className="py-10 flex flex-col items-center">
        <Title title="CONTATTI" background="SOCIAL" />
        <div className="flex flex-col md:flex-row w-3/4 lg:w-1/2 justify-between py-10 text-slate-800 max-w-[900px]">
          
          <Link href={"https://www.instagram.com/caffeina_politica/"} target="_blank">
            <div className="flex flex-col items-center my-5 px-3">
              <FaInstagram size={40} />
              <p className="text-xs py-2">@caffeina_politica</p>
            </div>
          </Link>

          <Link href={"https://t.me/CaffeinaPolitica"} target="_blank">
            <div className="flex flex-col items-center my-5 px-3">
              <FaTelegramPlane size={40} />
              <p className="text-xs py-2">t.me/CaffeinaPolitica</p>
            </div>
          </Link>

          <Link href={"mailto:caffeina.politica@gmail.com"} target="_blank">
            <div className="flex flex-col items-center my-5 px-3">
              <FiMail size={40} />
              <p className="text-xs py-2">caffeina.politica@gmail.com</p>
            </div>
          </Link>

          <Link href={"https://www.tiktok.com/@caffeinapolitica?_t=8bhip3iWvCk"} target="_blank">
            <div className="flex flex-col items-center my-5 px-3">
              <FaTiktok size={40} />
              <p className="text-xs py-2">@caffeinapolitica</p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Contatti;

