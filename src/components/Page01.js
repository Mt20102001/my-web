import React, { Component, useState } from "react";

export default class Page01 extends Component {
  constructor() {
    super();
    this.light = React.createRef();
    this.pos = React.createRef();
    this.mousemoveHandler = (e) => {
      var x = e.pageX;
      var y = e.pageY;

      this.light.current.style.setProperty(
        "--h",
        this.pos.current.offsetHeight + "px"
      );
      this.light.current.style.setProperty("--x", x + "px");
      this.light.current.style.setProperty("--y", y + "px");
    };

    this.Load = () => {
      this.light.current.style.setProperty(
        "--h",
        this.pos.current.offsetHeight + "px"
      );
      this.light.current.style.setProperty(
        "--h",
        this.pos.current.offsetHeight + "px"
      );
      this.light.current.style.setProperty("--x", 50 + "%");
      this.light.current.style.setProperty("--y", 35 + "%");
    };
    window.addEventListener("load", (event) => {
      this.Load();
    });
  }

  render() {
    // var light = document.querySelector(".grid");
    // var pos = document.querySelector(".light");

    return (
      <>
        <div id="page1" />
        <div id="particles-js" className="grid" ref={this.light} />
        <div
          className="light"
          ref={this.pos}
          onMouseMove={this.mousemoveHandler}
        />
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
