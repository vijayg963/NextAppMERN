import React from "react";
interface prop {
  children?: React.ReactNode;
  type?: any;
  text?: any;
  handleClick?: () => void;
}

const Button = ({ children, type, text, handleClick }: prop) => {
  return (
    <button
      className={` text-white shadow-slate-100 fill-white m-4 px-4 py-2 rounded-md bg-slate-500`}
      type={type}
      onClick={handleClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
