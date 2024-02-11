"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
// import logo from "../../public/Images/logo.png";
import "./Header.css";
import Button from "../../Common/Buttons/ConnectBtn/ConnectBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

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
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const toggleModal = () => setShowSideBar((prev) => !prev);

  return (
    <>
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

              <div className="navy hidden  md:block  links bg-[#211f22] border-[1px] border-purple-500/30 rounded-full p-2">
                <ul className="flex items-center space-x-3 lg:space-x-6 text-sm">
                  {navLinks.map((link, id) => (
                    <li
                      className={`${
                        pathname === link.path
                          ? "bg-zinc-500"
                          : "bg-transparent"
                      } py-2 px-5 rounded-full duration-300 flex-shrink-0`}
                      key={id}
                    >
                      <Link href={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center">
                <div className="hidden md:block">
                  <Button />
                </div>

                <div className="flex align-center items-center">
                  <RxHamburgerMenu
                    size={26}
                    className="md:hidden cursor-pointer"
                    onClick={toggleModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed overflow-hidden w-full duration-300 text-center right-0 top-0 bg-[#171717] text-white z-[1000] ${
          showSideBar ? "h-[100vh]" : "h-0"
        }`}
      >
        <div className="w-full min-h-full relative flex items-center justify-center">
          <IoClose
            className="absolute top-10 right-8 cursor-pointer"
            size={30}
            onClick={toggleModal}
          />

          <ul className="flex flex-col gap-3">
            {navLinks.map((link, id) => (
              <li
                className={`${
                  pathname === link.path ? "bg-zinc-500" : "bg-transparent"
                } py-2 px-5 rounded-full duration-300 flex-shrink-0`}
                key={id}
                onClick={toggleModal}
              >
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
            <Button />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
