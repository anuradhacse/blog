import React from "react";
import ReactImage from "../images/react.jpeg";
import DockerImage from "../images/docker.png";
import JavaImage from "../images/java.jpeg";
import BitcoinImage from "../images/bitcoin.jpeg";

const PostsList = () => {
  return (
    <div className="ui divided stackable items ">
      <div className="item">
        <img className="ui small image" alt="logo" src={ReactImage}></img>
        <div className="middle aligned content">
          <div className="header">React 101</div>
          <div className="description">
            In this tutorial you will learn how to get started with react
          </div>
          <div className="extra">
            Oct 16 . 10 min read . <i className="star icon small"></i>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="ui small image" alt="logo" src={DockerImage}></img>
        <div className="middle aligned content">
          <div className="header">Docker 101</div>
          <div className="description">
            In this tutorial you will learn how to get started with react
          </div>
          <div className="extra">
            Oct 16 . 10 min read . <i className="star icon small"></i>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="ui small image" alt="logo" src={JavaImage}></img>
        <div className="middle aligned content">
          <div className="header">Java 101</div>
          <div className="description">
            In this tutorial you will learn how to get started with Java
          </div>
          <div className="extra">
            Oct 16 . 10 min read . <i className="star icon small"></i>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="ui small image" alt="logo" src={BitcoinImage}></img>
        <div className="middle aligned content">
          <div className="header">Bitcoin 101</div>
          <div className="description">
            In this tutorial you will learn how to get started with Java
          </div>
          <div className="extra">
            Oct 16 . 10 min read . <i className="star icon small"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
