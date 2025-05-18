"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import SidebarMobile from "./SidebarMobile";

const MobileNavbarWrapper = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div>
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Search />
      <SidebarMobile openSidebar={openSidebar} />
    </div>
  );
};

export default MobileNavbarWrapper;
