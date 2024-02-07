import React from "react";
import Image from "next/image";
// import logo from "../../public/Images/logo.png";
import "./Header.css";
import Button from "../../Common/Buttons/ConnectBtn/ConnectBtn";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed w-full text-white">
      <div className="container">
        <div className="d-flex items-center">
          <div className="flex py-10 items-center flex md:flex-row items-center justify-between">
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
            <div className="hidden md:block links">
              <ul className="flex items-center space-x-6">
                <li className="">
                  <a href="#features">Home</a>
                </li>
                <li className="">
                  <a href="#methodology">Marketplace</a>
                </li>
                <li className="">
                  <a href="#faq">About Us</a>
                </li>
                <li className="">
                  <a href="#faq">Docs</a>
                </li>
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
