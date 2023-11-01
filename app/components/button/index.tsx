import React from "react";

interface prop {
  children?: React.ReactNode;
  type?: any;
  text?: any;
  onClick?: () => void;
}

const Button = ({ children, type, text, onClick }: prop) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
