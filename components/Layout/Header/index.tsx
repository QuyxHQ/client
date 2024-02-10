"use client";
import React from "react";
import Image from "next/image";
// import logo from "../../public/Images/logo.png";
import "./Header.css";
import Button from "../../Common/Buttons/ConnectBtn/ConnectBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/Marketplace",
    label: "Marketplace",
  }, 
  {
    path: "/er",
    label: "About Us",
  },
  {
    path: "/erer",
    label: "Docs",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full text-white z-[500]">
      <div className="container">
        <div className="d-flex items-center">
          <div className="flex py-10 items-center md:flex-row justify-between">
            <div className="nav-brand">
              <Link href={"/"}>
                <Image
                  src={"/Images/logo-full.svg"}
                  width={80}
                  height={80}
                  alt="logo"
                />
              </Link>
            </div>
            {/* <div className="d-flex align-items-center gap-1"> */}
            <div className="hidden md:block links bg-[#211f22] border-[1px] border-purple-500/30 rounded-full p-2">
              <ul className="flex items-center space-x-6 text-sm">
                {navLinks.map((link, id) => (
                  <li
                    className={`${
                      pathname === link.path ? "bg-zinc-500" : "bg-transparent"
                    } py-2 px-5 rounded-full`}
                    key={id}
                  >
                    <a className="link" href="#features">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Button />
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Header;
