import React from "react";
import Link from "next/link";
import { Element } from "react-scroll";
import Title from "./Title";
import { FaTelegram, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contatti = () => {
  return (
    <Element name="contatti">
      <div className="py-10 flex flex-col items-center">
        <Title title="CONTATTI" background="SOCIAL" />
        <div className="flex flex-col md:flex-row w-3/4 lg:w-1/2 justify-between py-10 text-slate-800">
          <Link href={"https://www.instagram.com/caffeina_politica/"}>
            <div className="flex flex-col items-center my-5 px-3">
              <FaInstagram size={40} />
              <p className="text-xs py-2">@caffeina_politica</p>
            </div>
          </Link>
          <Link href={"https://t.me/CaffeinaPolitica"}>
            <div className="flex flex-col items-center my-5 px-3">
              <FaTelegramPlane size={40} />
              <p className="text-xs py-2">t.me/CaffeinaPolitica</p>
            </div>
          </Link>
          <Link href={"caffeina.politica@gmail.com"}>
            <div className="flex flex-col items-center my-5 px-3">
              <FiMail size={40} />
              <p className="text-xs py-2">caffeina.politica@gmail.com</p>
            </div>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Contatti;

