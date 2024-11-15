import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar({ x}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Home NavBar */}
      {x && (
        <nav className="hm-Homenavbar">
          <div className="logo">
            <img src="/image/logo.svg" alt="logo" />
          </div>

          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link className="Link" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="Link" to={"/About"}>
                  About
                </Link>
              </li>
              <li>Services</li>
              <li>Pages</li>
              <li>Blog</li>
              <li>
                <Link className="Link" to={"/Contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="hm-Homenavbar-icon">
            <div>
              <CiSearch />
            </div>
            <div className="basket">
              <SlBasket />
            </div>
          </div>

          <div className="button-wrapper">
            <button>
              <div>GET A QUOTE</div>{" "}
              <div>
                <FaArrowRightLong />
              </div>
            </button>
          </div>

          <div className="toggle-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      )}

      {/* About and Contact NavBar */}

      {!x && (
        <nav className="hm-navbar">
          <div className="hm-Navbar2-logo">
            <img src="/image/logo.svg" alt="Logo" />
          </div>

          <div className={toggle ? "hm-Navbar2-list open" : "hm-Navbar2-list"}>
            <ul>
              <li>
                <Link className="Link" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="Link" to={"/About"}>
                  About
                </Link>
              </li>
              <li>Services</li>
              <li>Pages</li>
              <li>Blog</li>
              <li>
                <Link className="Link" to={"/Contact"}>
                  Contact
                </Link>
              </li>
              <li>
                <CiSearch />
              </li>
            </ul>
          </div>

          <button className="hm-quote-button">GET A QUOTE ➔</button>

          <div className="hm-nav-shape">
            <img src="/image/plane.webp" alt="Plane Shape" />
          </div>

          <div className="hm-toggle-icon" onClick={() => setToggle(!toggle)}>
            <CiSearch className="search-icon" />
            {toggle ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      )}
    </>
  );
}
