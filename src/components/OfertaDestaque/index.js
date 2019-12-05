
import React, {useState, useEffect} from 'react'

import {Row, Col, Form, Button} from 'react-bootstrap'

import {Beenhere as Detalheico} from 'styled-icons/material/Beenhere'
import {Whatsapp as Whatsappico} from 'styled-icons/icomoon/Whatsapp'

import firebase from '../../config/firebase'
import useOfertaDestaque from './useOfertaDestaque'

const OfertaDestaque = (props) => {

const {inputHandleChange , formHandleClick } = useOfertaDestaque()

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
          <Form id="form-orcamento" className="oferta-hero-form">
            <Form.Group>
              <Form.Control
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite seu Nome"
                onChange={inputHandleChange}
              />
              <Form.Control
                type="phone"
                name="telefone"
                id="telefone"
                placeholder="Digite seu telefone"
                onChange={inputHandleChange}
              />
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
                onChange={inputHandleChange}
              />
              <Button variant="primary btn-block btn-lg" onClick={formHandleClick}>
                ENVIAR
              </Button>
              <Button variant="success btn-block btn-lg">
              <Whatsappico style={{float:'left', maxHeight:30}}/><p>Whatsapp Web</p>
              </Button>
            </Form.Group>
          </Form>
          </div>
        </Col>
      </Row>
      </>
)}
export default OfertaDestaque