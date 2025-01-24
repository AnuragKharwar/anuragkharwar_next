import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col w-screen  h-screen justify-center items-center px-8 ">
      <h1>404! Page Not Found</h1>
      <a href="/" className="text-blue-500 hover:text-blue-700">
        Go to Home
      </a>
    </div>
  );
};

export default Page;
