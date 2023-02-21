import React from "react";
import Image from "next/image";

const Presentazione = ({ reverse, image }) => {
  return (
    <div className={`flex flex-col  ${reverse ? "md:flex-row-reverse" : "md:flex-row"}  items-center`}>
      
      <div className="w-52 h-52 m-5 bg-slate-800 overflow-hidden shadow-lg" style={{borderRadius: "82% 18% 66% 34% / 36% 44% 56% 64% "}}>
        <Image src={image} alt="foto dei fondatori" width={208} height={208} />
      </div>

      <div className={`flex flex-col w-5/6 lg:w-3/5 ${reverse ? "text-right" : "text-left"} p-3`}>
        <h3 className="text-2xl lg:text-3xl font-semibold">Elia Campanini</h3>
        <p className="text-md lg:text-lg font-normal py-3">
        Ho vent&apos;anni, studio scienze politiche, sociali e internazionali a Bologna e voglio sempre comprendere il perchè, di tutto.
        Il mio interesse alla politica, al sociale, all&apos;argomentare e al dibattere si lega anche a una domanda: &quot;la politica&quot; può ancora cambiare qualcosa? A Caffeina Politica cercherò di darmi una risposta e di comprendere se, nonostante le divisioni sempre più marcate nella società, il confronto è ancora possibile.
        </p>
      </div>
      
    </div>
  );
};

export default Presentazione;
