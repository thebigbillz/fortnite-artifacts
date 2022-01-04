import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={Style.nav}>
      <nav>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "500" }}>
          Fortnite Artifacts
        </h1>
        <ul>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.active : Style.navLink
            }
            to="/"
          >
            Home
          </NavLink>
          {/* <NavLink
            className={({ isActive }) =>
              isActive ? Style.active : Style.navLink
            }
            to="/about"
          >
            About
          </NavLink> */}
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.active : Style.navLink
            }
            to="/shop"
          >
            Gallery
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
