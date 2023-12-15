import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { TbHexagonLetterW } from "react-icons/tb";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { GlobalVarContext } from "../Context/GlobalVar";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
const Header = () => {
  // const [isToggle, setIsToggle] = useState(false);
  let {isToggle,setIsToggle} = useContext(GlobalVarContext)
  const onclickHandler = () => {
    setIsToggle(!isToggle);
  };
  return (
    <>
      <nav className="Navbar">
        <div className="container">
          <NavLink to={"/"} className="Nav-logo">
            <TbHexagonLetterW size={40} /><span>PortFolio</span>
          </NavLink>
        </div>
        <ul className={`Nav-content ${isToggle ? "active" : ""}`}>
          {data.map((items, key) => {
            return (
              <li key={key} className="Nav-items">
                <NavLink to={items.to} className="Nav-items-links" onClick={onclickHandler}>
                  {items.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="Nav-Toggle" onClick={onclickHandler}>
          {isToggle ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </>
  );
};

export default Header;
