import React from "react";
import Link from "next/link";
import Container from "./Container";

const Nav = () => {
  return (
    <nav className="navbar bg-black text-white h-20 flex items-center">
      <Container className=" w-full flex justify-between items-center">
        <Link href="/">
          <a className="font-bold text-xl">🤪 Carlo's Blog</a>
        </Link>
        <ul className="">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
