import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../../features/appSlice";
import { selectUser } from "../../features/userSlice";
import "./style.css";

export default function SidebarChannel({ id, mychannel }) {
  const dispatch=useDispatch(selectUser);
  return (
    <div className="sidebarChannel" onClick={()=>dispatch(setChannelInfo({
      channelId:id,
      channelName:mychannel,
  }))}>
      <h4>
        <span className="sidebarchannel__Hash">#</span>{mychannel}
      </h4>
    </div>
  );
}
