import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="logo" className="navbar__logo" />
      </Link>
      <h1 className="navbar__title">Books catalog</h1>
      <Link to="/admin" className="navbar__btn">
        Admin
      </Link>
    </nav>
  );
};

export default NavBar;
