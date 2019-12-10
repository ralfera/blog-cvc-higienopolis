import React, {useEffect, useState} from 'react';
import './global-style.css'
import Toolbar from './components/Toolbar'
import Sidebar from './components/Sidebar';
import BackdropSidebar from './components/BackdropSidebar'
import {Container} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import firebase from './config/firebase'

function Layout(props) {

  const dispatch = useDispatch()

  const db = firebase.firestore()
  const storage = firebase.storage()
  const [isLoading, setIsLoading] = useState(false)
  
  const ObjToArr = (obj)=>{
    const newArr = []
    Object.keys(obj).map((result)=>{
      newArr.push(obj[result])
    })
    return newArr
  }
  
  let listaOfertas = []
  useEffect(() => {
    db.collection("ofertas").orderBy("data", "desc").get().then(async(resultado)=>{
     await resultado.docs.forEach(item => {
      listaOfertas.push({
          ...item.data(),
          id:item.id,
          detalhes: ObjToArr(item.data().detalhes),
        })
      })
      await dispatch({type: "PUSH_OFERTA_DESTAQUE", oferta:listaOfertas})
      await dispatch({type: "PUSH_TODAS_OFERTAS",  lista:listaOfertas})
      setIsLoading(true)
      localStorage.setItem("lista", JSON.stringify(listaOfertas))
    })}, []);

    // pega o ID do post destaque
    const idAtivo = useSelector((item)=>{
      return item.Oferta.Destaque.id
    })
    console.log(idAtivo)
  // Define o backdrop
  let backdrop
  // abre o useState
  const sidebarOpen = useSelector(state=>{return state.User.sidebar.show})
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
      {!isLoading 
      ? 
      null 
      :
      <>             
      <Toolbar SidebarClick={sidebarHandleClick}/>
      <Sidebar show={sidebarOpen} destaqueid={idAtivo}/>
      {backdrop}
      <section id="main-content" style={{marginTop: '25-px'}}>
        {props.children}
      </section>      
      </>
    }
    </Container>

  );
}

export default Layout;
