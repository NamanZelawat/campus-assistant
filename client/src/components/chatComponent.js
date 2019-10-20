import React, { Component } from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  renderCustomComponent,
  addUserMessage
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import { baseUrl } from "../redux/baseUrl";

import logo from "../images/avatar.jpeg";

import"./max.css";

class Chat extends Component {
  componentDidMount() {
    // addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    this.postMes(newMessage);
  };

  postMes = text => {
    const newBid = {
      input: text
    };
    return fetch(baseUrl + "ask", {
      method: "POST",
      body: JSON.stringify(newBid),
      headers: {
        "Content-Type": "application/json"
        // 'Authorization': bearer
      },
      credentials: "same-origin"
    })
      .then(
        response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        error => {
          throw error;
        }
      )
      .then(response => response.json())

      .then(response => {
        console.log(response.result);
        if (response.result.output.generic[0].response_type === "text") {
          addResponseMessage(response.result.output.generic[0].text);
        } else {
          renderCustomComponent(() => (
            <img src={response.result.output.generic[0].source} />
          ));
        }
        // addResponseMessage(
        //   response.result.output.generic[0].response_type === "text"
        //     ? response.result.output.generic[0].text
        //     : "View this image : " +
        // );
        // // return )
      })
      .catch(error => {
        alert("Product could not be bidd\nError: " + error.message + "\n");
      });
  };
  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Chatbot"
          subtitle="Lets talk smartly"
        />
      </div>
    );
  }
}

export default Chat;
