import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <section className="top">
          <div className="container">
            <div className="row">
              <div className="logo">
                <img src="img/logo.jpg" alt="" />
              </div>
              <div className="wrapper">
                <a href className="btn">
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <header>
            <div className="navbar">
              <a href className="logo">
                <img src="./img/logo-1.png" alt="" />
              </a>
              <nav>
                <ul id="main-menu">
                  <li>
                    <a href="#page1">HOME</a>
                  </li>
                  <li>
                    <a href="#page2">ABOUT</a>
                  </li>
                  <li>
                    <a href>SERVICES</a>
                  </li>
                  <li>
                    <a href>TEAM</a>
                  </li>
                  <li>
                    <a href>PORFORLO</a>
                  </li>
                  <li>
                    <a href>BLOG</a>
                  </li>
                  <li>
                    <a href>CONTACT</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </section>
      </>
    );
  }
}
