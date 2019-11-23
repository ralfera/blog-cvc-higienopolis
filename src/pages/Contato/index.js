import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import {MapPin} from 'styled-icons/fa-solid/MapPin'
import {PhoneCall as Phone} from 'styled-icons/boxicons-regular/PhoneCall'
import {Whatsapp} from 'styled-icons/boxicons-logos/Whatsapp'


import Layout from '../../Layout'

import './styles.css'

export default function Contato() {
  return (
    <Layout>
    <Container>
      <h1>Entre em Contato Conosco:</h1>
      <Row>
        <Col lg="7">  
        <Row>
        <Col lg="6 contato-filial-wrapper">
            <h2>Filial Higieanópolis</h2>
            <p><MapPin size="25" />Endereço: Av. Plínio Brasil Milano, 1100 - Loja 104</p>
            <p><Phone size="25" />Telefone: (51) 3085-8580</p>
            <p><Whatsapp size="25"/>Whatsapp: (51) 9 9687-3114</p>
            <iframe title="Mapa Higieanópolis" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.575735626594!2d-51.18294758434421!3d-30.020336437117237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979d5dd36c525%3A0xc482d832882b4475!2sCVC%20Hiper%20Zaffari%20Higien%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1574430279322!5m2!1spt-BR!2sbr" width="300" height="200" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
          </Col>
          <Col lg="6 contato-filial-wrapper">
            <h2>Filial Tramandaí</h2>
            <p><MapPin size="25" />Endereço: Av. da Igreja, 98 - loja 04</p>
            <p><Phone size="25" />Telefone: (51) 3661-3077</p>
            <p><Whatsapp size="25"/>Whatsapp: (51) 9 9827-6371</p>
            <iframe title="Mapa Tramandaí" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8223510381063!2d-50.1353426843449!3d-29.984535035454233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9518732294ae934d%3A0x1f9cb16e9920166d!2sCVC%20Tramanda%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1574431779478!5m2!1spt-BR!2sbr" width="300" height="200" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>

            </Col>
        </Row>                              
        </Col>
        <Col lg="5 contato-form">
          <section>
            <p>Preencha o formulário abaixo com seus dados para que um de nossos consultores possa entrar em contato com você. Caso prefira, clique no telefone do Whatsapp para iniciar um atendimento por chat.</p>
          <Form className="">
            <Form.Control className="form-control"  placeholder="Digite seu Nome" type="text"/>
            <Form.Control className="form-control"  placeholder="Digite seu Telefone" type="phone" />
            <Form.Control className="form-control"  placeholder="Digite seu Email" type="email"/>
            <Form.Control className="form-control"  placeholder="O que você precisa?" as="textarea" rows="3"/>
            <Button variant="success btn-block"> ENVIAR EMAIL</Button>
          </Form>
          </section>
        </Col>
      </Row>
    </Container>
    </Layout>
  );
}
