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
    path: "/marketplace",
    label: "Marketplace",
  }, 
  {
    path: "/about",
    label: "About Us",
  },
  {
    path: "/docs",
    label: "Docs",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full text-white z-[500]">
      <div className="container">
        <div className="d-flex items-center">
          <div className="flex gap-6  py-10 items-center md:flex-row justify-between">
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
            <div className="navy hidden  md:block  links bg-[#211f22] border-[1px] border-purple-500/30 rounded-full p-2">
              <ul className="flex items-center space-x-3 lg:space-x-6 text-sm">
                {navLinks.map((link, id) => (
                  <li
                    className={`${
                      pathname === link.path ? "bg-zinc-500" : "bg-transparent"
                    } py-2 px-5 rounded-full duration-300 flex-shrink-0`}
                    key={id}
                  >
                    <Link href={link.path}>
                      {link.label}
                    </Link>
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
