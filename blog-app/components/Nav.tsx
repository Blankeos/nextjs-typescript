import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
