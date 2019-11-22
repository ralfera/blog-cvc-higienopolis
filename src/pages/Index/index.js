import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import image from "../../images/singapura/singapura.jpg";

import "./styles.css";

export default function OfertaHero() {
  return (
    <Container>
      <h1>Ofertaço Para Você:</h1>
      <Row className="oferta-hero-wrapper">
        <Col lg="7">
          {/* Primeira Coluna */}
          <Row bsPrefix="oferta-hero-colunaum">
            <Col bsPrefix="oferta-hero-img">
              <Image src={image} fluid />
            </Col>
            <Col className="oferta-hero-detalhes">
              <h2>Detalhes Do Pacote:</h2>
                <ul>
                  <li>Lorem ipsum dolor, sint sequi natus?</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat, maxime accusamus delectus.</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore deleniti reiciendis mollitia deserunt esse quia magni recusandae nesciunt suscipit, adipisci, veritatis at.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor, sint sequi natus?</li>
                </ul>
            </Col>
          </Row>
        </Col>
        {/* Segunda Coluna */}
        <Col lg="5" className="">
          <div className="oferta-hero-colunadois">
          <h1>Singapura Com Tudo Liberado</h1>
          <p className="oferta-hero-preco">
            <span>R$</span> 12.520,99
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
    </Container>
  );
}
