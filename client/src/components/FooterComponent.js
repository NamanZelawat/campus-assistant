import React, { Component } from "react";
import Chat from "./ChatComponent";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <p className="footer" align="center">
          © Copyright 2019 Team Wreckers IIT (ISM){" "}
        </p>
        <Chat style={{ zIndex: 10000 }} />
      </React.Fragment>
    );
  }
}

export default Footer;
