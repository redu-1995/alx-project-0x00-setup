import React from "react";
import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`bg-[#F9F9F9] px-4 py-2 rounded-full text-sm font-semibold ${styles}`}
    >
      {title}
    </button>
  );
};
export default Button;