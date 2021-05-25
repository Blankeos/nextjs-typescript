import Nav from "./Nav";
import React from "react";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 bg-blue-200">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
