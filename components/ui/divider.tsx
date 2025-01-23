import React from "react";

const Divider = ({ className }: any) => {
  return (
    <div
      className={`border border-gray-200 dark:border-gray-600 w-full my-8 ${className}`}
    />
  );
};
export default Divider;
