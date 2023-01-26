import React, { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";

const Bibliography = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="w-full bg-slate-500 rounded-md p-2 mb-20">
      <div className="px-2 text-slate-50" onClick={handleShow}>
        <BsArrowDownRight />
      </div>
      {show ? (
        <div className="p-2 text-slate-100">
          <hr className="py-2" />
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Bibliography;
