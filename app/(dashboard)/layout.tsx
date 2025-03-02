// import Footer from "@/Components/ui/footer";
import Footer from "@/components/ui/footer";
import Navbar from "../../components/ui/navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center w-screen  lg:px-8 ">
      <div className="h-full w-full xl:w-[70vw] 2xl:w-[50vw] ">
        <Navbar />

        {children}
        <Footer />
        {/* <BackgroundBeams /> */}
      </div>
    </div>
  );
};

export default layout;
