import React, { useEffect, useState } from "react";
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
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import db, { auth } from "../../firebase";
import { selectUser } from "../../features/userSlice";



export default function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);
  const handleAddChannel = (e) => {
    e.preventDefault();

    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

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
            <AddIcon onClick={handleAddChannel}/>
          </div>
        </div>
        <div className="sidebar__channelList">
        {channels.map(({id ,channel}) => (
            <SidebarChannel key={id} id={id} mychannel={channel.channelName}/>
          ))}
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
        <Avatar src={user.photo} onClick={() => auth.signOut()}/>
        <div className="sidebar_profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substr(0, 5)}</p>
        </div>
        <div className="sidebar_profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}
