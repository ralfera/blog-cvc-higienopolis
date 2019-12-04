import React, {useState} from "react";

import LayoutAdmin from "../../components/AdminLayout";
import { Col, Form, Button, Alert } from "react-bootstrap";
import "./styles.css";

import useFormOfertas from "./customhooks";
import firebase from "../../config/firebase";

export default function AdicionarOferta() {
  const [msgHandler, setMsgHandler] = useState(false);

  const storage = firebase.storage();
  const db = firebase.firestore();

    const callback = () => {

    storage
      .ref(`imagens/${formValues.foto.name}`)
      .put(formValues.foto)
      .then(() => {
        db.collection("ofertas")
          .add({
            data: new Date(),
            destaque: formValues.destaque,
            detalhes: Object.assign({}, formValues.detailsArray),
            foto: formValues.foto.name,
            orcamentos: 0,
            preco: Number(formValues.preco),
            titulo: formValues.titulo,
            visualizacoes: 0,
          })
          .then(setMsgHandler(true));
      })
      .catch(erro => {
        console.error(erro);
      });
  };

  const {
    setFormValues,
    formValues,
    handleInputChange,
    handleDetailsArray,
    handleSubmit
  } = useFormOfertas(callback);

  return (
    <LayoutAdmin>
      <div className="adicionar-oferta-wrapper">
        <h1>Adicionar Oferta</h1>
        {msgHandler ? (
          <Alert
            variant="success"
            onClose={() => setMsgHandler(false)}
            dismissible
          >
            Oferta cadastrada com sucesso
          </Alert>
        ) : null}
        <Form id="form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Titulo da Oferta:</Form.Label>
            <Form.Control
              type="text"
              name="titulo"
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>É Destaque?</Form.Label>
            <Form.Check
              onClick={(e)=> {setFormValues({...formValues, destaque: !formValues.destaque})}}
              name="destaque"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Preço da Oferta:</Form.Label>
            <Form.Control
              min="1" 
              step="any"
              onChange={handleInputChange}
              type="number"
              name="preco"
              className="form-control"
              required
            />
          </Form.Group>
          <Form.Label>Detalhes:</Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="details">
              <Form.Control
                onChange={handleInputChange}
                placeholder="Digite As Observações da Oferta"
                size="md"
                name="details"
                type="text"
                className="form-control"
                
              />
            </Form.Group>
            <Form.Group>
              <Button onClick={handleDetailsArray}>Adicionar</Button>
            </Form.Group>
          </Form.Row>
          <Form.Group
            style={{
              border: "1px solid rgba(0,0,0,0.125)",
              borderRadius: ".5rem"
            }}
          >
            <ul className="list-group list-group-flush">
              {formValues.detailsArray.map((item, key) => {
                    return (
                      <li key={key} className="list-group-item">
                        {item}
                      </li>
                    );
                  })
                }
            </ul>
          </Form.Group>
          <Form.Group>
            <Form.Label>Escolha a foto de Destaque:</Form.Label>
            <Form.Control
              name="foto"
              onChange={handleInputChange}
              type="file"
              className="form-control"
              required
            />
          </Form.Group>
          <Button variant="btn-block btn-large btn-cvc" type="submit">
            Cadastrar Oferta
          </Button>
        </Form>
      </div>
    </LayoutAdmin>
  );
}
