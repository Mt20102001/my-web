import React, { Component } from "react";

export default class ContactPage extends Component {
  render() {
    return (
      <>
        <div className="eighth_content">
          <h2>CONTACT</h2>
          <hr />
          <div className="infor-contact">
            <div className="infor">
              <h1>ADDRESS</h1>
              <p>123 Street, New York (USA)</p>
            </div>
            <div className="infor">
              <h1>PHONE</h1>
              <p>+123 456 789</p>
            </div>
            <div className="infor">
              <h1>EMAIL</h1>
              <p>info@myemail.com</p>
            </div>
          </div>
          <form action>
            <div className="upInput">
              <input type="text" placeholder="Name*" />
              <input type="email" placeholder="Email*" />
            </div>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Massage*"
              defaultValue={""}
            />
            <div className="send-btn">
              <a href className="subscribe_btn">
                Send
              </a>
            </div>
          </form>
        </div>
      </>
    );
  }
}
