import React from "react";
import UserImage from "../images/user.jpg";

const Header = () => {
  return (
    <div className="ui text tiny menu ">
      {/* <img
        className="item ui top aligned  tiny image"
        alt="logo"
        src={Logo}
      ></img> */}
      <a class="header item">
        Good Morning <i className="smile icon yellow big"></i>{" "}
      </a>

      <div className="right menu">
        <a className=" item ">
          <i class="react icon teal big"></i>
          <i class="docker icon blue big"></i>
          <i class="ember icon red big"></i>
          <i class="ethereum icon violet big"></i>
          <i class="android icon green big"></i>
          <i class="python icon dark big"></i>
          <i class="angular icon brown big"></i>
          <i class="aws icon  yellow big"></i>
          <i class="openid icon orange big"></i>
          <i class="node icon green big"></i>
          <i class="bitcoin icon yellow big"></i>
          <i class="php icon white big"></i>
          <i class="paypal icon olive big"></i>
          <i class="sass icon violet big"></i>
          <i class="linux icon  big"></i>
          <i class="html5 icon red big"></i>
          <i class="apple pay icon black big"></i>
        </a>
      </div>

      <div className="right menu">
        <div className="item">
          <img alt="user" src={UserImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
