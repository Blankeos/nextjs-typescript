import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-center items-center py-3 flex-col space-y-2">
      <p>2021 © Carlo Taleon. All Rights Reserved.</p>
      <Link href="catt.me">Carlo Taleon's Website</Link>
    </footer>
  );
};

export default Footer;
