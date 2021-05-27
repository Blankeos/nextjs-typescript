import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar bg-black text-white h-20 flex items-center">
      <div className="max-w-4xl w-full mx-auto flex justify-between">
        <Link href="/">
          <a>Carlo's Blog</a>
        </Link>
        <ul className="">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
