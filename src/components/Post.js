import React from "react";
import UserImage from "../images/user.jpg";
import ReactImage from "../images/react.jpeg";

const Post = () => {
  return (
    <div>
      <div className="ui card stackable">
        <div class="content">
          <div class="right floated meta">14h</div>
          <img class="ui avatar image" src={UserImage} />
        </div>
        <div class=" image small">
          <img src={ReactImage} />
        </div>
        <div className="content">
          <div class="header">Introduction to React - 101</div>
          <div class="description">
            You will learn to set up a react project and start building awsome
            apps.
          </div>

          <div class="extra content">
            <span class="right floated">Read more</span>
            <span>
              <i class="heart icon"></i>
              75
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
