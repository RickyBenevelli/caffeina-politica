import React from "react";
import Title from "./Title";
import { FaTelegram, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const Contatti = () => {
  return (
    <section id="contatti">
      <div className="py-10 flex flex-col items-center">
        <Title title="CONTATTI" background="SOCIAL" />
        <div className="flex flex-col md:flex-row w-1/2 justify-between py-10 text-slate-800">
          <Link href={"https://www.instagram.com/caffeina_politica/"}>
            <div className="flex flex-col items-center my-5">
              <FaInstagram size={40} />
              <p className="text-xs py-2">@caffeina_politica</p>
            </div>
          </Link>
          <Link href={"https://t.me/CaffeinaPolitica"}>
            <div className="flex flex-col items-center my-5">
              <FaTelegramPlane size={40} />
              <p className="text-xs py-2">t.me/CaffeinaPolitica</p>
            </div>
          </Link>
          <Link href={"caffeina.politica@gmail.com"}>
            <div className="flex flex-col items-center my-5">
              <FiMail size={40} />
              <p className="text-xs py-2">caffeina.politica@gmail.com</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contatti;

