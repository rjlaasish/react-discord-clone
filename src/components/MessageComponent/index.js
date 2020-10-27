import { Avatar } from "@material-ui/core";
import React from "react";
import "./style.css";

function ChatMessage() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
          <h4>aaaasish
              <span className="message__timestamp">
                  This is message__timestamp
              </span>
          </h4>
          <p>This is a message</p>
      </div>
    </div>
  );
}

export default ChatMessage;
