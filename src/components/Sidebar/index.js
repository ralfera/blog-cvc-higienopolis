import React from "react";

import {Container} from 'react-bootstrap'
import "./styles.css";
import CardOferta from "../CardOferta";

export default function Sidebar(props) {
  let sidebarClasses;

  if (props.show) {
    sidebarClasses = ["sidebar-wrapper open"];
  } else {
    sidebarClasses = ["sidebar-wrapper"];
  }

  return (
    <nav className={sidebarClasses}>
      <Container className="outras-ofertas-wrapper">
        <h1>Outras Promoções Feras:</h1>
        <ul>
          <li>
            <CardOferta />
          </li>
          <li>
            <CardOferta />
          </li>
          <li>
            <CardOferta />
          </li>
          <li>
            <CardOferta />
          </li>
          <li>
            <CardOferta />
          </li>
          <li>
            <CardOferta />
          </li>
          <li>
            <CardOferta />
          </li>
        </ul>
      </Container>
    </nav>
  );
}
