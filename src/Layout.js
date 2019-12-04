import React, {useState} from 'react';
import './global-style.css'
import Toolbar from './components/Toolbar'
import Sidebar from './components/Sidebar';
import BackdropSidebar from './components/BackdropSidebar'
import { Container} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'

function Layout(props) {

  const dispatch = useDispatch()

  // Define o backdrop
  let backdrop
  // abre o useState
  const sidebarOpen = useSelector(state=>{return state.sidebar.show})
  // HandleClick da Sidebar
  const sidebarHandleClick = ()=> {
    dispatch({type:"OPEN_SIDEBAR", show: true})
  }
  // Se abrir sidebar o backdrop é ativado
  if(sidebarOpen){
    backdrop = <BackdropSidebar SidebarClick={()=>{dispatch({type:"OPEN_SIDEBAR", show: false})}} />
  }

  return (
    <Container className="App">
      <Toolbar SidebarClick={sidebarHandleClick}/>
      <Sidebar show={sidebarOpen}/>
      {backdrop}
      <section id="main-content" style={{marginTop: '25-px'}}>
        {props.children}
      </section>      
    </Container>
  );
}

export default Layout;
