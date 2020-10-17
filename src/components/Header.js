import React from "react";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <img className="item ui top aligned  tiny image" alt="logo" src={Logo}></img>
    </div>
  );
};

export default Header;
