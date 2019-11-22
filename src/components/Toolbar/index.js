import React from 'react';
import SidebarButtom from '../Sidebar/SidebarButtom';
import {Link} from 'react-router-dom'

import {Image} from 'react-bootstrap';
import Logo from '../../images/logo.png'
import './styles.css'


export default function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__sidebarbuttom">
          <SidebarButtom />
        </div>
        <div className="toolbar__logo">
          <a href="/"><Image src={Logo} fluid/></a>
        </div>        
        <div className="toolbar_navigation-items">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link onClick={props.SidebarClick}> Outras Promoções</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>      
        </div>
      </nav>
    </header>
  );
}
