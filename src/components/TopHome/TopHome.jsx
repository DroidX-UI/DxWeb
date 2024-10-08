import React from "react";
import logo_gh from "../../assets/reach_gh.svg";
import logo_tg from "../../assets/ic_telegram.svg";
import logo_X from "../../assets/ic_X.svg";
import glimpse from "../../assets/glimpse.png";
import { Link } from "react-router-dom";

const TopHome = () => {
  return (
    <div className="header flex md:my-28 mx-8 md:mx-14">
      <div className="dx-reach-out hidden md:flex gap-24 flex-col my-9 items-center">
        <a
          href="https://github.com/DroidX-UI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-[30px] ml-[12px]" src={logo_gh} alt="Github" />
        </a>
        <a
          href="https://t.me/DroidXUI_chats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo_tg} alt="TG" />
        </a>
        <a
          href="https://twitter.com/DroidX_UI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo_X} alt="X" />
        </a>
      </div>
      <div className="dx-middle-desc flex flex-col md:mx-[90px]">
        <p
          className="text-4xl md:text-7xl leading-snug md:leading-normal"
          style={{ fontFamily: "Product Sans Bold" }}
        >
          Spice up your Android <br />
          experience with
          <br />
          <span className="text-[#3282b8]">DroidX-UI</span>
        </p>
        <div className="nav-tryDx mt-5 md:w-1/4">
          <Link to="/Download">Try Droidx-UI</Link>
        </div>
        <div
          className="dx-support-nums hidden md:flex mt-24 gap-56"
          style={{ fontFamily: "Product Sans Bold" }}
        >
          <p className="text-3xl leading-snug">
            <span className="text-[#3282b8] text-6xl">30+</span> <br />
            Supported <br />
            Devices
          </p>
          <p className="text-3xl leading-snug">
            <span className="text-[#3282b8] text-6xl">500+</span> <br />
            Happy DXUI <br />
            Users
          </p>
          <p className="text-3xl leading-snug">
            <span className="text-[#3282b8] text-6xl">20+</span> <br />
            Active <br />
            Developers
          </p>
        </div>
      </div>
      <div className="dx-glimpse md:w-[500px] hidden md:inline-block absolute right-0 top-32">
        <img className="img1" src={glimpse} alt="" />
      </div>
    </div>
  );
};

export default TopHome;
