import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-4 text-center text-gray-500 dark:text-gray-400 ">
      ©️ 2025 All rights reserved.
      <a
        href="https://github.com/AnuragKharwar"
        target="_blank"
        rel="noreferrer"
      >
        Anurag
      </a>
      {" · "}
      <div className="text-xs flex flex-col lg:flex-row items-center justify-center gap-2">
        <p>Portfolio Inspiration Credit 🔥</p>
        <a href="https://manuarora.in/" target="_blank" rel="noreferrer">
          Mannu Arora @accternity
        </a>
        <a href="https://www.adeolabadero.me/" target="_blank" rel="noreferrer">
          adeolabadero
        </a>
        <a href="https://beatrizneaime.com/" target="_blank" rel="noreferrer">
          beatrizneaime
        </a>
        ...other(Thanks)
      </div>
    </div>
  );
};

export default Footer;
