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
        <div className="flex flex-row w-1/2 justify-between py-10 text-slate-800">
          <Link href={"https://www.instagram.com/caffeina_politica/"}>
            <div className="flex flex-col items-center">
              <FaInstagram size={40} />
              <p className="text-xs">@caffeina_politica</p>
            </div>
          </Link>
          <Link href={"https://t.me/CaffeinaPolitica"}>
            <div className="flex flex-col items-center">
              <FaTelegramPlane size={40} />
              <p className="text-xs">t.me/CaffeinaPolitica</p>
            </div>
          </Link>
          <Link href={"caffeina.politica@gmail.com"}>
            <div className="flex flex-col items-center">
              <FiMail size={40} />
              <p className="text-xs">caffeina.politica@gmail.com</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contatti;

