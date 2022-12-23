import React, { Component } from "react";

export default class OurPortfolio extends Component {
  render() {
    return (
      <>
        <div className="eighth_content">
          <h2>OUR PORTFOLIO</h2>
          <hr />
          {/* can them ground trinh chieu anh co thr loc anh theo yeu cai */}
          <div className="tag-list">
            <ul>
              <li>
                <a href>All</a>
              </li>
              <li>
                <a href>Graphic Design</a>
              </li>
              <li>
                <a href>Web Design</a>
              </li>
              <li>
                <a href>Web Development</a>
              </li>
            </ul>
          </div>
          <div className="grid-container grid-container--fit hover01 column01">
            <div className="grid-element">
              <div className="img__wrap grid-item">
                <figure>
                  <img
                    src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/work1.jpg"
                    alt=""
                  />
                </figure>
                <div className="img__description img__description_fix">
                  <h3>Project #1</h3>
                  <p>Project Description</p>
                </div>
              </div>
            </div>
            <div className="grid-element">
              <div className="img__wrap grid-item">
                <figure>
                  <img
                    src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/work2.jpg"
                    alt=""
                  />
                </figure>
                <div className="img__description img__description_fix">
                  <h3>Project #2</h3>
                  <p>Project Description</p>
                </div>
              </div>
            </div>
            <div className="grid-element">
              <div className="img__wrap grid-item">
                <figure>
                  <img
                    src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/work3.jpg"
                    alt=""
                  />
                </figure>
                <div className="img__description img__description_fix">
                  <h3>Project #3</h3>
                  <p>Project Description</p>
                </div>
              </div>
            </div>
            <div className="grid-element">
              <div className="img__wrap grid-item">
                <figure>
                  <img
                    src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/work4.jpg"
                    alt=""
                  />
                </figure>
                <div className="img__description img__description_fix">
                  <h3>Project #4</h3>
                  <p>Project Description</p>
                </div>
              </div>
            </div>
            <div className="grid-element">
              <div className="img__wrap grid-item">
                <figure>
                  <img
                    src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/work5.jpg"
                    alt=""
                  />
                </figure>
                <div className="img__description img__description_fix">
                  <h3>Project #5</h3>
                  <p>Project Description</p>
                </div>
              </div>
            </div>
            <div className="grid-element">
              <div className="img__wrap grid-item">
                <figure>
                  <img
                    src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/work6.jpg"
                    alt=""
                  />
                </figure>
                <div className="img__description img__description_fix">
                  <h3>Project #6</h3>
                  <p>Project Description</p>
                </div>
              </div>
            </div>
            <div className="grid-element">
              <div className="img__wrap grid-item">
                <figure>
                  <img
                    src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/work7.jpg"
                    alt=""
                  />
                </figure>
                <div className="img__description img__description_fix">
                  <h3>Project #7</h3>
                  <p>Project Description</p>
                </div>
              </div>
            </div>
            <div className="grid-element">
              <div className="img__wrap grid-item">
                <figure>
                  <img
                    src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/work1.jpg"
                    alt=""
                  />
                </figure>
                <div className="img__description img__description_fix">
                  <h3>Project #8</h3>
                  <p>Project Description</p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_load">
            <a href className="load_button">
              Load more
            </a>
          </div>
          <div className="subscribe">
            <h3>Subscribe To Our Newsletter</h3>
            <input type="email" placeholder="Enter your email..." />
            <br />
            <a href className="subscribe_btn">
              Subscribe
            </a>
          </div>
        </div>
        <div className="fifth_content">
          <h2>WANT TO DISCUSS YOUR NEW PROJECT?</h2>
          <a href className="fifth_btn">
            CONTACT US
          </a>
        </div>
      </>
    );
  }
}
