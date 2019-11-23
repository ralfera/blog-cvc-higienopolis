import React from 'react'
import './styles.css'

import {Link} from 'react-router-dom'
import {Container, ListGroup} from 'react-bootstrap'

const LayoutAdmin = (props) => {

  return(
    <div id="wrapper">
    <div id="sidebar-wrapper" className="border-right">
      <div className="sidebar-heading">CVC - Admin</div>
      <ListGroup variant="flush">
        <ListGroup.Item variant="action custom"><Link to="/admin">Dashboard</Link></ListGroup.Item>
        <ListGroup.Item variant="action custom "><Link to="/adicionar">Adicionar Oferta</Link></ListGroup.Item>
        <ListGroup.Item variant="action custom  "><Link to="/listar">Listar Ofertas</Link></ListGroup.Item>
      </ListGroup>
    </div>
      <Container fluid id="page-content-wrapper">          
          {props.children}
      </Container>
    </div>
  )
  
}

export default LayoutAdmin;