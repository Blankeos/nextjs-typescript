import Nav from "./Nav";
import React from "react";
import Footer from "./Footer";
import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
