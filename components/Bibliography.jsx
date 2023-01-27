import React, { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { BsFillArrowRightSquareFill, BsFillArrowDownSquareFill } from "react-icons/bs";

const Bibliography = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="w-full bg-slate-500 rounded-md p-2 shadow-lg">
      <div className=" text-slate-50 flex flex-row items-center justify-start text-sm" onClick={handleShow}>
        <BsFillArrowRightSquareFill size={20} className={`${show? "hidden" : ""}`}/>
        <BsFillArrowDownSquareFill size={20} className={`${show? "" : "hidden"}`}/>
        <span className="ml-2">Bibliography</span>
      </div>
      {show ? (
        <div className=" text-slate-100 text-xs lg:text-sm">
          <hr className=" my-2" />
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Bibliography;
