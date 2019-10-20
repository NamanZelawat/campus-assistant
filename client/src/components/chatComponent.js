import React, { Component } from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import logo from "../images/avatar.jpeg";

class Chat extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}

export default Chat;
