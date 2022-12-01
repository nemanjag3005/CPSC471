import React, { ReactElement, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
