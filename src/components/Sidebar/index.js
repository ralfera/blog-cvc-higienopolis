import React from "react";
import {useSelector} from 'react-redux'

import {Container} from 'react-bootstrap'
import "./styles.css";
import CardOferta from "../CardOferta";


export default function Sidebar(props) {

  const {Oferta: {listaOfertas}} = useSelector((state)=>{return state})
  
  let sidebarClasses;
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
            listaOfertas.map((item, key)=>{
              if(item.id != props.destaqueid){
              return (
              <li key={item.id}><CardOferta id={item.id} titulo={item.titulo} preco={item.preco} foto={item.foto} detalhes={item.detalhes} show={props.show}/></li>
              )}
            })
          }
        </ul>
      </Container>
    </nav>
  );
}
