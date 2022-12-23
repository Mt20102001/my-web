import React, { Component } from "react";

export default class footage extends Component {
  render() {
    return (
      <>
        <div className="footage">
          <img src="./img/logo-1.png" alt="" />
          <div className="logo_footage">
            <a href="#">
              <i className="fa-brands fa-square-facebook" />
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="#">
              <i className="fa-brands fa-dribbble" />
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>

        <div className="end">
          <p>© 2017. Crucio. All Rights Reserved.</p>
        </div>
      </>
    );
  }
}
