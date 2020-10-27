import React from "react";
import "./style.css";

export default function SidebarChannel({ id, channel }) {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarchannel__Hash">{id}</span>{channel}
      </h4>
    </div>
  );
}
