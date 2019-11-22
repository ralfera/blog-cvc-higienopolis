import React from 'react';

import {Card, Button} from 'react-bootstrap' 

import Imagem from '../../images/singapura/singapura.jpg'

import './styles.css'

export default function CardOferta(props) {
  return (
    <Card style={{marginBottom:"5px" }}>
      <Card.Img variant="top" src={Imagem} />
      <Card.Body>
        <Card.Title>MSC Atlantic Porto Alegre / San / Jamaica</Card.Title>
        <Card.Text>
          R$ 12.520,99
        </Card.Text>
        <footer className="card-oferta-footer">
        <Button variant="primary btn-block">Saiba Mais</Button>
        </footer>
      </Card.Body>
    </Card>
  );
}
