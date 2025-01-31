import React from "react";

const Blogs = () => {
  return (
    <div className="flex flex-col h-full lg:gap-4 ">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end">
        <h1 className="text-lg lg:text-3xl font-bold ">Recent Blogs</h1>
        <span className="text-gray-500 dark:text-gray-400  text-md">
          Sharing thoughts and learnings
        </span>
      </div>
      <div className="flex justify-between text-gray-500 dark:text-gray-400 mt-2"></div>
    </div>
  );
};

export default Blogs;
