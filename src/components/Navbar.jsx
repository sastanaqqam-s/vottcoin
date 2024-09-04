import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ open, setOpen }) => {
  return (
    <nav className="fixed top-0 z-[10] h-[70px] vsm:h-[80px] 2xl:h-[100px]  mx-auto w-full bg-[#0d0914] flex justify-between items-center">
      <div className="clip-side w-[55%] md:w-[40%] lg:w-[25%] 2xl:w-[410px] h-full bg-[#6850FF] flex justify-center gap-[5px] vsm:gap-[10px] items-center pr-[20px]">
        <img className="w-[40px] vsm:w-[52px]" src={logo} alt="Vottcoin" />
        <h1 className="text-[30px] vsm:text-[44px] font-Boogaloo">Vottcoin</h1>
      </div>

      <div className="hidden font-[600] font-Rajdhani gap-[30px] xl:flex items-center">
        <Link to="hero" smooth={true} offset={50} duration={500}>
          HOME
        </Link>
        <Link to="features" smooth={true} offset={-100} duration={500}>
          Features
        </Link>
        <Link to="token" smooth={true} offset={-100} duration={500}>
          Tokenomics
        </Link>
        <Link to="roadmap" smooth={true} offset={-100} duration={500}>
          Roadmap
        </Link>
        <Link to="exchange" smooth={true} offset={-260} duration={500}>
          Exchange Listings
        </Link>
        <Link to="contact" smooth={true} offset={-100} duration={500}>
          CONTACT
        </Link>
      </div>

      <a
        href="https://t.me/vottcoinbot"
        target="blank"
        className="telegram-btn hidden xl:block mr-[40px] my-[5px] w-[200px] py-[15px] text-[16px] font-Poppins font-[900] text-center text-[#0D0914] leading-[1.1] rounded-[42px]"
      >
        Join the Revolution
      </a>

      {/* <div className="hidden gap-[20px] items-center">
        <button className="btn1 w-[120px] h-[44px] text-white rounded-[7.5px] text-[24px] font-Boogaloo">
          NFT
        </button>
        <button className="btn2 w-[184px] h-[44px] text-white rounded-[7.5px] text-[24px] font-Boogaloo">
          Whitepaper
        </button>
      </div> */}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="pr-[40px] xl:hidden text-[25px]"
      >
        {open ? <FaTimes className="text-[red]" /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
