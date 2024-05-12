import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <>
      <label htmlFor="이메일">이메일</label>
      <input id="이메일" type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;
