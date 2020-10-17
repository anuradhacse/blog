import React from "react";
import ReactImage from "../images/react.jpeg";

const Post = () => {
  return (
    <div className="item">
      <img className="ui large image" alt="logo" src={ReactImage}></img>
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
  );
};

export default Post;
