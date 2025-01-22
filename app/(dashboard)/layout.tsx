import Footer from "@/Components/ui/footer";
import Navbar from "@/Components/ui/navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center w-screen h-screen px-8 ">
      <div className="h-full w-full lg:w-[50vw] ">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default layout;
