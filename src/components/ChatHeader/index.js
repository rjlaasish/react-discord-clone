import React from "react";
import './style.css';
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

import "./style.css";

function ChatHeader() {
  return (
    <div className="chat__header">
      <div className="chatheader_left">
        <h3>
          <span className="chatheader_hash">#</span>TestChannel Name
        </h3>
      </div>
      <div className="chatheader_right">
        <NotificationsIcon />
        <PeopleAltRoundedIcon />
        <EditLocationRoundedIcon />
        <div className="chatheader__search">
          <input placeholder="Search" />
          <SearchRoundedIcon />
        </div>

        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
