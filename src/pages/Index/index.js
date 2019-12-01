import React, {useState, useEffect} from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import image from "../../images/singapura/singapura.jpg";
import firebase from '../../config/firebase'

import "./styles.css";

export default function OfertaHero() {
  const useCustomHook = () => {

  const db = firebase.firestore();
  const storage = firebase.storage()
  const [ofertaHero, setOfertaHero] = useState([])
  const [detalhes, setDetalhes] = useState([])

     useEffect(() => {
       
      const oferta = async () => {
        const result = await db.collection("ofertas").orderBy("data", "desc");
        result.onSnapshot(snapshot => { 
          let breakCondition = false         
          snapshot.docs.map((item) => {
            if (item.data().destaque === true && !breakCondition) {
             setOfertaHero(item.data());             
             breakCondition = true
            }
          }) 
        });    
      }
      oferta()
      }, [])
      return ofertaHero
  }
const hero = useCustomHook()

  return (
    <Container>
      <h1>Ofertaço Para Você:</h1>
      <Row className="oferta-hero-wrapper">
        <Col lg={{span:7, order: 1 }} xs={{span: 12, order:2}}>
          {/* Primeira Coluna */}
          <Row bsPrefix="oferta-hero-colunaum " >
            <Col bsPrefix="oferta-hero-img">
              <Image src={image} fluid rounded/>
            </Col>
            <Col className="oferta-hero-detalhes">
              <h2>Detalhes Do Pacote:</h2>
                <ul>   
                  
                  {console.log(hero.detalhes)}

                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat, maxime accusamus delectus.</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore deleniti reiciendis mollitia deserunt esse quia magni recusandae nesciunt suscipit, adipisci, veritatis at.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor, sint sequi natus?</li>
                </ul>
            </Col>
          </Row>
        </Col>
        {/* Segunda Coluna */}
        <Col lg={{span:5, order:2}} xs={{span: 12, order:1}} className="">
          <div className="oferta-hero-colunadois">
          <h1>{hero.titulo}</h1>
          <p className="oferta-hero-preco">
            <span>R$</span> {hero.preco}
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