import React, { Component } from "react";

export default class TeamPage extends Component {
  render() {
    return (
      <>
        <div className="sixth_content">
          <h2>OUR TEAM</h2>
          <hr />
          <div className="hover01 column">
            <div className="img__wrap img__wrap_shadow">
              <figure>
                <img
                  src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/team1.jpg"
                  alt=""
                />
              </figure>
              <div className="img__description">
                <h3>SAMANTA L.</h3>
                <p>Architect</p>
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
              </div>
            </div>
            <div className="img__wrap img__wrap_shadow">
              <figure>
                <img
                  src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/team2.jpg"
                  alt=""
                />
              </figure>
              <div className="img__description">
                <h3>PAMELA K.</h3>
                <p>Designer</p>
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
              </div>
            </div>
            <div className="img__wrap img__wrap_shadow">
              <figure>
                <img
                  src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/team3.jpg"
                  alt=""
                />
              </figure>
              <div className="img__description">
                <h3>MICHEAL J.</h3>
                <p>Planner</p>
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
              </div>
            </div>
          </div>
          <div className="seventh_content">
            <div className="wpb_column">
              <div className="text-center">
                <h2
                  className="countTo animated"
                  data-to={150}
                  data-from={0}
                  data-speed={1500}
                >
                  150
                </h2>
                <h3>Clients</h3>
              </div>
            </div>
            <div className="wpb_column">
              <div className="text-center">
                <h2
                  className="countTo animated"
                  data-to={620}
                  data-from={0}
                  data-speed={1500}
                >
                  620
                </h2>
                <h3>Projects</h3>
              </div>
            </div>
            <div className="wpb_column">
              <div className="text-center">
                <h2
                  className="countTo animated"
                  data-to={25}
                  data-from={0}
                  data-speed={1500}
                >
                  25
                </h2>
                <h3>Awards</h3>
              </div>
            </div>
            <div className="wpb_column">
              <div className="text-center">
                <h2
                  className="countTo animated"
                  data-to={940}
                  data-from={0}
                  data-speed={1500}
                >
                  940
                </h2>
                <h3>Coffee</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
