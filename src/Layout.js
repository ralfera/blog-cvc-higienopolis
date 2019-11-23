import React, {useState} from 'react';
import './global-style.css'
import Toolbar from './components/Toolbar'
import Sidebar from './components/Sidebar';
import BackdropSidebar from './components/BackdropSidebar'
import { Container} from 'react-bootstrap'

function Layout(props) {

  // Define o backdrop
  let backdrop
  // abre o useState
  const [sidebarOpen, setSidebaropen] = useState(false);
  // HandleClick da Sidebar
  const sidebarHandleClick = ()=> {
    setSidebaropen(!sidebarOpen);    
  }
  // Se abrir sidebar o backdrop é ativado
  if(sidebarOpen){
    backdrop = <BackdropSidebar SidebarClick={()=>{setSidebaropen(false)}} />
  }

  return (
    <Container className="App">
      <Toolbar SidebarClick={sidebarHandleClick}/>
      <Sidebar show={sidebarOpen}/>
      {backdrop}
      <section style={{marginTop: '25-px'}}>
        {props.children}
      </section>      
    </Container>
  );
}

export default Layout;
