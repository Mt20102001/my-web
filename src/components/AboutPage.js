import React, { Component } from "react";

export default class AboutPage extends Component {
  render() {
    return (
      <>
        <div id="page2" />
        <div className="about">
          <div className="second_content" id="page2-home">
            <h1>
              WELCOME TO <span>CRUCIO</span>
            </h1>
            <h2>WE CREATE AWESOME WEBSITES</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid
              ex ea commodi consequat. Quis aute iure reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              obcaecat cupiditat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="third_content" id="page3-home">
            <div className="container_box">
              <div className="box box_1">
                <h2>RESPONSIVE</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquid ex ea commodi consequat.
                </p>
              </div>
              <div className="box box_2">
                <h2>CUSTOMIZABLE</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquid ex ea commodi consequat.
                </p>
              </div>
              <div className="box box_3">
                <h2>MODERN</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquid ex ea commodi consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
