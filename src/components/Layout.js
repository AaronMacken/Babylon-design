import React from "react";
import Navbar from "./NavbarBootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <div style={{ backgroundColor: "black" }}>Footer</div>
    </>
  );
};

export default Layout;
