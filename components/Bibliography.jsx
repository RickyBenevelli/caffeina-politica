import React, { useState } from "react";

import { HiArrowSmUp } from "react-icons/hi";

const Bibliography = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="w-full bg-slate-500 rounded-md p-2 shadow-lg">
      <div className=" text-slate-50 flex flex-row items-center justify-start text-sm cursor-pointer" onClick={handleShow}>
        <HiArrowSmUp size={20} className={`${show? "" : "rotate-180"} transition-transform duration-500`}/>
        <span className="ml-2">Bibliography</span>
      </div>
        <div className={`text-slate-100 text-xs lg:text-sm ${show? "" : "hidden"} transition-all duration-1000 list-decimal`}>
          <hr className=" my-2" />
          {children}
        </div>
    </div>
  );
};

export default Bibliography;
