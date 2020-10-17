import React from "react";
import PostsList from "./PostsList";
import TableContent from "./TableContent";
import Header from "./Header";
import Post from "./Post";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Header></Header>
        <div class="ui three column  grid">
          <div class="row">
            <div class="three wide column">
              <TableContent />
            </div>
            <div class="seven wide column">
              <Post />
            </div>
            <div class="six wide column">
              <PostsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
