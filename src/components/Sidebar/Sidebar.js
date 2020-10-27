import React from "react";
import "./style.css";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarChannel from "../SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from '@material-ui/icons/Settings';


export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* top_part */}
      <div className="sidebar__top">
        <h3>Aasish Rijal</h3>
        <ExpandMoreIcon />
      </div>

      {/* channel_part */}
      <div className="sidebar__channels">
        <div className="sidebar__channelheader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Test Channels</h4>
          </div>
          <div className="sidebar__addchannel">
            <AddIcon />
          </div>
        </div>
        <div className="sidebar__channelList">
          <SidebarChannel id="#" channel="Youtube" />
          <SidebarChannel id="#" channel="Twitch" />
          <SidebarChannel id="#" channel="Instagram" />
          <SidebarChannel id="#" channel="Lafanga_haru" />
        </div>
      </div>

      {/* voice_part */}
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          fontSize="large"
          className="sidebar__voiceIcon"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar />
        <div className="sidebar_profileInfo">
          <h3>@aasish_rijal</h3>
          <p>#this is my id</p>
        </div>
        <div className="sidebar_profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon/>
        </div>
      </div>
    </div>
  );
}
