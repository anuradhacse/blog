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
            <div class="four wide column">
              <Post />
            </div>
            <div class="seven wide column">
              <PostsList />
            </div>
            <div class="two wide column">
            <div class="ui skyscraper test ad" data-text="Skyscraper"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
