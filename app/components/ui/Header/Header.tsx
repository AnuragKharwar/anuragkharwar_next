import React from "react";
import ProfileSection from "./ProfileSection";
import About from "./About";

const Header = () => {
  return (
    <div className="flex flex-row">
      <ProfileSection />
      {/* <About /> */}
    </div>
  );
};

export default Header;
