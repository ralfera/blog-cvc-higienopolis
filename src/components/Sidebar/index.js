import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux'

import {Container} from 'react-bootstrap'
import "./styles.css";
import CardOferta from "../CardOferta";

import firebase from '../../config/firebase'

export default function Sidebar(props) {
  let sidebarClasses;
  const db = firebase.firestore()
  const storage = firebase.storage()

  const [ofertasSidebar, setOfertasSidebar] = useState()
  const [loaded, setLoaded] = useState(false)

  const toArr = (obj) =>{ 
    const newArr = []
    Object.keys(obj).map((result)=>{
      newArr.push(obj[result])
    })
    return newArr
  }

  useEffect(() => {
    const ofertasArraySidebar = []    
    db.collection('ofertas').onSnapshot(async(obj)=>{
      await obj.forEach((item)=>{
        if(!item.data().destaque){
          ofertasArraySidebar.push({ 
            id:item.id,
            titulo: item.data().titulo,
            preco: item.data().preco,
            foto: item.data().foto,
            detalhes: toArr(item.data().detalhes)
          })          
        }
        setOfertasSidebar(ofertasArraySidebar)
        setLoaded(true)
      })
    })
  }, []);

  if (props.show) {
    sidebarClasses = ["sidebar-wrapper open"];
  } else {
    sidebarClasses = ["sidebar-wrapper "];
  }

  return (
    <nav className={sidebarClasses}>
      <Container className="outras-ofertas-wrapper">
        <h1>Outras Promoções Feras:</h1>
        <ul>
          {
            !loaded ? 
            <p>Carregando</p>
            :
            ofertasSidebar.map((item, key)=>{
              return (<li key={item.id}><CardOferta id={item.id} titulo={item.titulo} preco={item.preco} foto={item.foto} detalhes={item.detalhes} show={props.show}/></li>)
            })
          }
        </ul>
      </Container>
    </nav>
  );
}
