import React, { Component } from "react";

export default class Page01 extends Component {
  render() {
    return (
      <>
        <div id="page1" />
        <div id="particles-js" className="grid" />
        <div className="light" />
        <div className="content">
          <div className="main_content">
            <h1>CRUCIO</h1>
            <hr />
            <h2>POWERFUL WEBSITES</h2>
            <a href="#page2" className="scroll-down" id="button" />
          </div>
        </div>
      </>
    );
  }
}
