// import Footer from "@/Components/ui/footer";
import Navbar from "../../components/ui/navbar";
import React from "react";
import { AuroraBackground } from "@/Components/ui/aurora-background";
import { BackgroundBeams } from "@/Components/ui/background-beams";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center w-screen  lg:px-8 ">
      <div className="h-full w-full lg:w-[50vw] ">
        <Navbar />

        {children}
        {/* <Footer /> */}
        {/* <BackgroundBeams /> */}
      </div>
    </div>
  );
};

export default layout;
