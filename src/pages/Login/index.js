import React from 'react';

import { Button, Form, Spinner} from 'react-bootstrap';

import './styles.css'

// import { Container } from './styles';

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-form-wrapper">
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Digite Seu Email</Form.Label>
            <Form.Control size="lg" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Digite Sua Senha</Form.Label>
            <Form.Control size="lg" />
          </Form.Group>
          <Button variant="btn-large btn-block btn btn-cvc">Logar</Button>
          <Button variant="success btn-block" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="lg"
              role="status"
              aria-hidden="true"
            />
            Carregando...
          </Button>
        </Form>
        <div className="login-return">
          <span></span><p>Parabéns, você acaba de logar!</p>
          <span></span><p>Ops, Não foi possível realizar o log-in! Verifique as informações digitadas e tente novamente.</p>
        </div>
      </div>
    </div>
  );
}
