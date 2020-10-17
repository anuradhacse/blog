import React from "react";

const TableContent = () => {
  return (
    <div className="ui list">
      <div className="item">
        <i className="folder icon big blue"></i>
        <div className="content">
          <div className="header">React</div>
          <div className="description">React tutorials list you can find</div>
          <div className="list">
            <div className="item">
              <i className="folder icon big blue"></i>
              <div class="content">
                <div class="header">site</div>
                <div class="description">Your site's theme</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <i className="folder icon big blue"></i>
        <div className="content">
          <div className="header">Docker</div>
          <div className="description">Docker tutorials</div>
        </div>
      </div>
      <div className="item">
        <i className="folder icon big blue"></i>
        <div className="content">
          <div className="header">Java</div>
          <div className="description">Java tutorials</div>
        </div>
      </div>
    </div>
  );
};

export default TableContent;
