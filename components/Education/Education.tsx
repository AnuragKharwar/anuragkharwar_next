import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col h-full lg:gap-4 ">
      <h1 className="text-lg lg:text-3xl font-bold ">Education</h1>
      <div className="flex justify-between text-gray-500 dark:text-gray-400 mt-2">
        <p className="text-md hidden lg:block ">
          <strong>B-Tech</strong> National Institute Of Technology - Surat,
          India.
        </p>
        <p className="text-md lg:hidden">
          <strong>B-Tech</strong> NIT - Surat, India.
        </p>
        <span className="text-xs lg:text-sm">2019-2023</span>
      </div>
    </div>
  );
};

export default Education;
