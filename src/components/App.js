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
        <div className="ui relaxed stackable grid">
          <div className="row">
            <div className="three wide column">
              <TableContent />
            </div>
            <div className="four wide column">
              <Post />
            </div>
            <div className="seven wide column">
              <PostsList />
            </div>
            <div className="two wide column">
              {/* <div
                className="ui skyscraper test ad" style={{height:'100'}}
                data-text="Skyscraper"
              ></div> */}
              <div
                class="ui vertical banner test ad"
                data-text="Vertical Banner"
              ></div>
              <div
                class="ui vertical banner test ad"
                data-text="Vertical Banner"
              ></div>
            </div>
          </div>
          <div class="ui divider"></div>
          <div className="row">
            <div className="five wide column">
              <PostsList />
            </div>
            <div className="five wide column">
              <PostsList />
            </div>
            <div className="six wide column">
              <PostsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
