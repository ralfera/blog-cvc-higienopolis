import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'

import OfertaDestaque from '../../components/OfertaDestaque'

import "./styles.css";

export default function Index() {

  const dispatch = useDispatch()
  
    const {Oferta: {Destaque: oferta}} = useSelector((state)=>{ return state })

  /////////// LAYOUT
  return (
    <Container>
      <OfertaDestaque id={oferta.id} detalhes={oferta.detalhes} foto={oferta.foto} titulo={oferta.titulo} preco={oferta.preco}/>
    </Container>
  )
}