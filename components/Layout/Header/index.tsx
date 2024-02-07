import React from "react";
import Image from "next/image";
import logo from "../../public/Images/logo.png";
import "./Header.css";
import Button from "../../Common/Buttons/ConnectBtn/ConnectBtn";

const Header = () => {
  return (
    <nav>
      <div className="container">
        <div className="d-flex items-center">
          <div className="group1 d-flex items-center flex-md-row align-md-items-center justify-content-between gap-1">
            <div className="nav-brand">
              <h1>
                <Image src={logo} alt="logo" />
                uyx
              </h1>
            </div>
            {/* <div className="d-flex align-items-center gap-1"> */}
            <div className="d-s-none d-lg-block links">
              <ul className="d-flex align-items-center">
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
