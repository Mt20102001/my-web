import React, { Component } from "react";

export default class ServicePage extends Component {
  render() {
    return (
      <>
        <div className="fourth_content">
          <h2>SERVICES</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
            ea commodi consequat. Quis aute iure reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <div className="list_service">
            <div className="service">
              <a href>
                <i className="fa-solid fa-desktop" />
              </a>
              <h2>WEB DESIGN</h2>
            </div>
            <div className="service">
              <a href>
                <i className="fa-solid fa-layer-group" />
              </a>
              <h2>BRAND DESIGN</h2>
            </div>
            <div className="service">
              <a href>
                <i className="fa-solid fa-grip" />
              </a>
              <h2>UI/UX DESIGN</h2>
            </div>
            <div className="service">
              <a href>
                <i className="fa-solid fa-palette" />
              </a>
              <h2>GRAPHIC DESIGN</h2>
            </div>
            <div className="service">
              <a href>
                <i className="fa-solid fa-camera" />
              </a>
              <h2>PHOTOGRAPHY</h2>
            </div>
            <div className="service">
              <a href>
                <i className="fa-solid fa-video" />
              </a>
              <h2>VIDEO EDITING</h2>
            </div>
            <div className="service">
              <a href>
                <i className="fa-solid fa-chart-simple" />
              </a>
              <h2>DATA ANALYSIS</h2>
            </div>
            <div className="service">
              <a href>
                <i className="fa-solid fa-user" />
              </a>
              <h2>CLIENT ASSISTANCE</h2>
            </div>
          </div>
        </div>
        <div className="fifth_content">
          <h2 className="revealUp">
            WE CREATE <span>AWESOME</span> PROJECTS
          </h2>
          <a href className="fifth_btn">
            Get started
          </a>
        </div>
      </>
    );
  }
}
