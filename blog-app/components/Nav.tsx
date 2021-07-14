import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { motion } from "framer-motion";

const Nav = () => {
  const [navIsGlass, setNavIsGlass] = useState(false);
  function listener() {
    if (window.scrollY > 80) {
      setNavIsGlass(true);
      console.log("true");
    } else {
      setNavIsGlass(false);
      console.log("false");
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", listener);
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav className="navbar text-white h-20 flex items-center top-0 sticky">
      <div className="relative w-full h-full">
        <div
          className={`absolute bg-black w-full h-full ${
            navIsGlass &&
            "bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-b border-gray-200"
          }`}
        ></div>
        <Container className="absolute w-full h-full flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-xl">🤪 Carlo's Blog</a>
          </Link>
          <ul className="">
            <NavLinkItem href="/">Home</NavLinkItem>
            <NavLinkItem href="/about">About</NavLinkItem>
          </ul>
        </Container>
      </div>
    </nav>
  );
};

// ${
//   navIsGlass && "opacity-50"
// }
const NavLinkItem: React.FC<{ href: string; className?: string }> = ({
  className,
  href,
  children,
}) => {
  return (
    <Link href={href ? href : "/"}>
      <motion.li
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          },
        }}
        className={className}
      >
        {children}
      </motion.li>
    </Link>
  );
};

export default Nav;
