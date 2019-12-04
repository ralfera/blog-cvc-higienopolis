
import React, {useState, useEffect, useLayoutEffect} from 'react'

import {Row, Col, Form, Button} from 'react-bootstrap'

import {Beenhere as Detalheico} from 'styled-icons/material/Beenhere'

import firebase from '../../config/firebase'

const OfertaDestaque = (props) => {

const db = firebase.firestore()
const storage = firebase.storage()

const [imgOferta, setImgOferta] = useState()

useEffect(()=>{
  storage.ref('imagens').child(props.foto).getDownloadURL().then((url)=>{
    setImgOferta(url)
  })  
}, [])

return (
  <>
      <h1>Ofertaço Para Você:</h1>
      <Row className="oferta-hero-wrapper">
        <Col lg={{span:7, order: 1 }} xs={{span: 12, order:2}}>
          {/* Primeira Coluna */}
          <Row bsPrefix="oferta-hero-colunaum " >
            <Col bsPrefix="oferta-hero-img">     
            <img src={imgOferta} alt="" className="img-fluid rounded"/>         
              {/* <Image src={} fluid rounded/> */}
            </Col>
            <Col className="oferta-hero-detalhes">
              <h2>Detalhes Do Pacote:</h2>
                <ul> 
                  {props.detalhes.map((item, key)=>{
                   return( <li key={key} className="detalheico"><Detalheico />{item}</li>)
                  })}  
                </ul>
            </Col>
          </Row>
        </Col>
        {/* Segunda Coluna */}
        <Col lg={{span:5, order:2}} xs={{span: 12, order:1}} className="">
          <div className="oferta-hero-colunadois">
          <h1>{props.titulo}</h1>
          <p className="oferta-hero-preco">
            <span>R$</span> {props.preco}
          </p>
          <p style={{ margin: "10px 0", textAlign: "justify" }}>
            Gostou da oferta? Preencha o formulário abaixo com seus dados que um
            de nossos consultores entrará em contato com você!
          </p>
          <Form className="oferta-hero-form">
            <Form.Group>
              <Form.Control
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite seu Nome"
              />
              <Form.Control
                type="phone"
                name="telefone"
                id="telefone"
                placeholder="Digite seu telefone"
              />
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
              />
              <Form.Control type="text" name="assunto" id="assunto" />
              <Button variant="primary btn-block btn-lg" type="submit">
                ENVIAR
              </Button>
            </Form.Group>
          </Form>
          </div>
        </Col>
      </Row>
      </>
)}
export default OfertaDestaque