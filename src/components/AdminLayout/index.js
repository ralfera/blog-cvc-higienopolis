import React from 'react'
import {Redirect} from 'react-router-dom'
import './styles.css'

// REDUX CALL
import {useSelector} from 'react-redux'

import {Link} from 'react-router-dom'
import {Container, ListGroup} from 'react-bootstrap'

const LayoutAdmin = (props) => {

  return(
    <div id="wrapper">
      { useSelector(state=>state.User.user.isLoggedIn) ? null : <Redirect to="/login"/>}
    <div id="sidebar-wrapper" className="border-right">
      <div className="sidebar-heading">CVC - Admin</div>
      <ListGroup variant="flush">
        <ListGroup.Item variant="action custom"><Link to="/admin">Dashboard</Link></ListGroup.Item>
        <ListGroup.Item variant="action custom "><Link to="/admin/adicionar">Adicionar Oferta</Link></ListGroup.Item>
        <ListGroup.Item variant="action custom  "><Link to="/admin/listar">Listar Ofertas</Link></ListGroup.Item>
      </ListGroup>
    </div>
      <Container fluid id="page-content-wrapper">          
          {props.children}
      </Container>
    </div>
  )
  
}

export default LayoutAdmin;