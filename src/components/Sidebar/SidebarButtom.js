import React from 'react';

import "./SidebarButtom.css";

export default function SidebarButtom(props) {
  return (
    <button className="sidebar-button" onClick={props.ClickAction}>
      <div className="sidebar-button_line"></div>
      <div className="sidebar-button_line"></div>
      <div className="sidebar-button_line"></div>
    </button>
  );
}
